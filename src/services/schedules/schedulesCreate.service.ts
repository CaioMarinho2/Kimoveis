import { AppError } from "../../errors/AppError";
import { IScheduleRequest } from "../../interfaces/schedules";
import { Properties } from "../../entities/properties.entity";
import AppDataSource from "../../data-source";
import { Schedules_users_properties } from "../../entities/schedules_users_properties.entity";
import { User } from "../../entities/users.entity";

async function schedulesCreateService({
  date,
  hour,
  propertyId,
  userId,
}: IScheduleRequest) {
  let horaUser;

  const horaSeparada = hour.split("");

  if (horaSeparada.length === 4) {
    horaUser = hour.slice(0, 1);
  } else {
    horaUser = hour.slice(0, 2);
  }
  const userDate = new Date(date);
  const diaDaSemana = userDate.getDay();

  const propertieRepository = AppDataSource.getRepository(Properties);
  const schedulesRepository = AppDataSource.getRepository(
    Schedules_users_properties
  );
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();
  const properties = await propertieRepository.find();
  const schedules = await schedulesRepository.find();

  const validPropertieId = properties.find(
    (propertie) => propertie.id === propertyId
  );
  const user = users.find((user) => user.id === userId);

  if (!validPropertieId) {
    throw new AppError("Property not found", 404);
  }
  if (!user) {
    throw new AppError("user not found", 404);
  }

  if (diaDaSemana === 6 || diaDaSemana === 0) {
    throw new AppError("Invalid Date", 400);
  }
  if (+horaUser < 8 || +horaUser > 18) {
    throw new AppError("Invalid hour", 400);
  }

  const validHour = schedules.find((schedules) => schedules.hour === hour);
  const validDate = schedules.find(
    (schedules) => String(schedules.date) === String(userDate)
  );

  if (validHour && validDate) {
    throw new AppError("User schedule already exists", 400);
  }

  const newSchedule = new Schedules_users_properties();
  newSchedule.date = userDate;
  newSchedule.hour = hour;
  newSchedule.property = validPropertieId;
  newSchedule.user = user;

  schedulesRepository.create(newSchedule);
  await schedulesRepository.save(newSchedule);

  return { message: "Schedule created" };
}

export default schedulesCreateService;
