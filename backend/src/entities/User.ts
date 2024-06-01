import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"varchar",default:"defaultfirstname"})
    firstName:string;

    @Column({type:"varchar", default:'defaultlastname'})
    lastName:string;

    @Column({type:'boolean', default:true})
    isActive:boolean;
}
