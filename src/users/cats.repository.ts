import { EntityRepository, Repository } from 'typeorm';

import { BaseAbstractRepository } from 'transportation-common';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends BaseAbstractRepository<User> {

}