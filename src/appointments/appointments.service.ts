import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './appointment.entity';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentsRepository: Repository<Appointment>,
  ) {}

  async findAll(): Promise<Appointment[]> {
    return this.appointmentsRepository.find({ relations: ['doctor'] });
  }

  async create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
    const newAppointment = this.appointmentsRepository.create({
      ...createAppointmentDto,
      doctor: { id: createAppointmentDto.doctorId },
    });
    return this.appointmentsRepository.save(newAppointment);
  }
}