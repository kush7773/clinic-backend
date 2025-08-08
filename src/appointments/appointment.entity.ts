import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Doctor } from '../doctors/doctor.entity';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  patientName: string;

  @Column()
  date: string;

  @Column()
  time: string;

  @ManyToOne(() => Doctor, (doctor) => doctor.appointments)
  doctor: Doctor;
}