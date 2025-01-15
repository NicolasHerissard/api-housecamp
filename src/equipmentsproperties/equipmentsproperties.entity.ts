import { ApiProperty } from "@nestjs/swagger";
import { Equipment } from "src/equipments/equipment.entity";
import { Properties } from "src/properties/properties.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";

@Entity('equipmentsproperties')
export class EquipmentsProperties {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    equipment_id: number;

    @ApiProperty()
    @Column()
    properties_id: number;

    @ManyToMany(() => Equipment, equipment => equipment.equipmentsProperties)
    equipment: Equipment[];

    @ManyToMany(() => Properties, properties => properties.equipmentsProperties)
    properties: Properties[];
}