import { Properties } from 'src/properties/properties.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity('equipments')
export class Equipment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Properties, properties => properties.equipments)
    properties: Properties[];

    @ManyToMany(() => Properties, properties => properties.equipmentsProperties)
    @JoinTable()
    equipmentsProperties: Properties[];
}