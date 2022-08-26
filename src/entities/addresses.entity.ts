import { Entity, Column, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid"


@Entity("addresses")
export class Addresses {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  district: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column()
  number: boolean;

  @Column()
  city: boolean;

  @Column({ length: 2 })
  state: string;



  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
