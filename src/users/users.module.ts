import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { User } from './user.entity';
import { UserRepository } from './cats.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    imports: [TypeOrmModule.forFeature([UserRepository])],
    controllers: [CatsController],
    providers: [CatsService],
  })
export class UsersModule {}
