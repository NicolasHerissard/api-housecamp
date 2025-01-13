import { EquipmentsProperties } from 'src/equipmentsproperties/equipmentsproperties.entity';
import { Properties } from 'src/properties/properties.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity('equipments')
export class Equipment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Properties, properties => properties.equipments)
    properties: Properties[];

    @ManyToMany(() => EquipmentsProperties, equipmentsProperties => equipmentsProperties.equipment)
    equipmentsProperties: EquipmentsProperties[];
}