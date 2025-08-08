import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import this
import { UsersService } from './users.service';
import { User } from './user.entity'; // Import this

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Add this line
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
