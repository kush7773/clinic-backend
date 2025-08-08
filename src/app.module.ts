import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorsModule } from './doctors/doctors.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Doctor } from './doctors/doctor.entity';
import { Appointment } from './appointments/appointment.entity';
import { User } from './users/user.entity'; // Import the new User entity

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // This is the important line for Render
      ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false, // Required for Render connections
      host: 'localhost', // Fallback for local development
      port: 3306,
      username: 'root',
      password: '',
      database: 'clinic_db',
      entities: [Doctor, Appointment, User],
      synchronize: true,
    }),
    DoctorsModule,
    AppointmentsModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
