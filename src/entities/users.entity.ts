import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Schedules_users_properties } from "./schedules_users_properties.entity";

@Entity("users")
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  isAdm: boolean;

  @Column({default:true})
  isActive: boolean;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(()=>Schedules_users_properties,schedules_users_properties=>schedules_users_properties.user)
  schedules_users_properties: Schedules_users_properties[]
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
