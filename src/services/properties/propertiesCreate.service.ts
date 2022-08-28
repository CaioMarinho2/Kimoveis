import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entity";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/AppError";
import { IPropertyRequest } from "../../interfaces/properties";

async function propertiesCreateService({
  value,
  size,
  address,
  categoryId,
}: IPropertyRequest) {
  if (
    !value ||
    !size ||
    !address.district ||
    !address.zipCode ||
    !address.city ||
    !address.state ||
    !categoryId
  ) {
    throw new AppError("missing argument", 400);
  }

  const categoryRepository = AppDataSource.getRepository(Categories);
  const propertieRepository = AppDataSource.getRepository(Properties);
  const addresRepository = AppDataSource.getRepository(Addresses);

  const categories = await categoryRepository.find();
  const addresses = await addresRepository.find();

  const categoryIdValid = categories.find(
    (categories) => categories.id === categoryId
  );
  const adressesValidZipCode = addresses.find(
    (addresses) => addresses.zipCode === address.zipCode
  );
  const adressesValidNumber = addresses.find(
    (addresses) => addresses.number === address.number
  );

  if (!categoryIdValid) {
    throw new AppError("Invalid category Id", 404);
  }
  if (adressesValidNumber || adressesValidZipCode) {
    throw new AppError("Address already exists", 400);
  }

  if (address.zipCode.length > 8) {
    throw new AppError("Invalid zip code", 400);
  }
  if (address.state.length > 2) {
    throw new AppError("Invalid state", 400);
  }

  const newAddress = new Addresses();
  newAddress.city = address.city;
  newAddress.district = address.district;
  newAddress.number != address.number;
  newAddress.state = address.state;
  newAddress.zipCode = address.zipCode;

  addresRepository.create(newAddress);

  await addresRepository.save(newAddress);

  const newPropertie = new Properties();
  newPropertie.value = value;
  newPropertie.size = size;
  newPropertie.address = newAddress;
  newPropertie.category = categoryIdValid;

  propertieRepository.create(newPropertie);
  await propertieRepository.save(newPropertie);

  return newPropertie;
}

export default propertiesCreateService;
