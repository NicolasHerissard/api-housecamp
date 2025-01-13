import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('equipments')
export class Equipment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}