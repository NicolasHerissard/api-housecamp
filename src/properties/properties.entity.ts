import { Equipment } from 'src/equipments/equipment.entity';
import { EquipmentsProperties } from 'src/equipmentsproperties/equipmentsproperties.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity('properties')
export class Properties {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'user_id' })
    user_id: number;

    @Column({ name: 'title' })
    title: string;

    @Column({ name: 'description' })
    description: string;

    @Column({ name: 'city' })
    city: string;

    @Column({ name: 'country' })
    country: string;

    @Column({ name: 'address' })
    address: string;

    @Column({ name: 'price' })
    price: number;

    @Column({ name: 'max_guests' })
    max_guests: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @ManyToMany(() => Equipment, equipment => equipment.properties)
    equipments: Equipment[];

    @ManyToMany(() => EquipmentsProperties, equipmentsProperties => equipmentsProperties.properties)
    equipmentsProperties: EquipmentsProperties[];
}