import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Addresses } from "./addresses.entity";
import { Categories } from "./categories.entity";
import { Schedules_users_properties } from "./schedules_users_properties.entity";


@Entity("properties")
export class Properties {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ default: false })
  sold: boolean;

  @Column("decimal", {precision:12, scale:2} )
  value: number;

  @Column({type:'integer'})
  size: number ;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne((type)=>Addresses,{
    eager:true,
    nullable:false,
  })@JoinColumn()
  adresses:Addresses

  @ManyToOne(()=>Categories)
  category:Categories

  @OneToMany(()=>Schedules_users_properties,schedules_users_properties=>schedules_users_properties.property)
  schedules_users_properties: Schedules_users_properties[]

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
