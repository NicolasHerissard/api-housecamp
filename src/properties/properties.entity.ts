import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

    @Column({ name: 'created_at' })
    created_at: Date;
}