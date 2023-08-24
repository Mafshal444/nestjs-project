import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRepository } from './cats.repository';
import { User } from './user.entity';
@Injectable()
export class CatsService {
  private readonly cats = [];
  constructor(
    @InjectRepository(UserRepository)
    private UserRepository: UserRepository,
  ){}
  create(cat) {
    this.cats.push(cat);
  }

  async findAll() {
    return await this.UserRepository.findAndCount()
  }
}