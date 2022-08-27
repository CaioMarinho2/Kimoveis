import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import {v4 as uuid} from "uuid"
import { Properties } from "./properties.entity";
import { User } from "./users.entity";


@Entity("schedules_users_properties")
export class Schedules_users_properties {
  @PrimaryColumn("uuid")
 readonly id: string;

  @Column()
  date: Date;

  @Column({type:'time'} )
  hour:string;

  @ManyToOne(()=>Properties,{
    nullable:false,
  
  })
  property: Properties

  @ManyToOne(()=>User,{
    nullable:false,
  })
  user:User

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}