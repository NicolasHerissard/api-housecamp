import { ApiProperty } from '@nestjs/swagger';
import { Equipment } from 'src/equipments/equipment.entity';
import { EquipmentsProperties } from 'src/equipmentsproperties/equipmentsproperties.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity('properties')
export class Properties {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ name: 'user_id' })
    user_id: number;

    @ApiProperty()
    @Column({ name: 'title' })
    title: string;

    @ApiProperty()
    @Column({ name: 'description' })
    description: string;

    @ApiProperty()
    @Column({ name: 'city' })
    city: string;

    @ApiProperty()
    @Column({ name: 'country' })
    country: string;

    @ApiProperty()
    @Column({ name: 'address' })
    address: string;

    @ApiProperty()
    @Column({ name: 'price' })
    price: number;

    @ApiProperty()
    @Column({ name: 'max_guests' })
    max_guests: number;

    @ApiProperty()
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @ManyToMany(() => Equipment, equipment => equipment.equipmentsProperties)
    equipments: Equipment[];

    @ManyToMany(() => EquipmentsProperties, equipmentsProperties => equipmentsProperties.properties)
    equipmentsProperties: EquipmentsProperties[];
}