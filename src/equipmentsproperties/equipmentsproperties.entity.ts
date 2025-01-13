import { Equipment } from "src/equipments/equipment.entity";
import { Properties } from "src/properties/properties.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";

@Entity('equipmentsproperties')
export class EquipmentsProperties {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    equipment_id: number;

    @Column()
    properties_id: number;

    @ManyToMany(() => Equipment, equipment => equipment.equipmentsProperties)
    equipment: Equipment[];

    @ManyToMany(() => Properties, properties => properties.equipmentsProperties)
    properties: Properties[];
}