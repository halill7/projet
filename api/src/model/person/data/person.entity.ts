import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn} from "typeorm";
import {ulid} from "ulid";
import {Car} from "./car.entity";

@Entity()
export class Person {
    @PrimaryColumn('varchar', { length:26, default: () => `'${ulid()}'` })
    person_id: string;
    @Column({nullable: true})
    firstname: string;
    @Column({nullable: true})
    lastname: string;
    @Column({nullable: true})
    gender: string;
    @Column({nullable: true})
    birthdate: Date;
    @ManyToMany(()=>Car, (car)=> car.owner)
    @JoinTable({
        name:'car_park',
        inverseJoinColumn: {name:'car_id_fk', referencedColumnName:'car_id'},
        joinColumn:{name:'person_id_fk', referencedColumnName:'person_id'}
    })
    cars:Car[];
}