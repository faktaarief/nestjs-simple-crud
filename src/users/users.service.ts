import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find()
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.usersRepository.save(createUserDto)
  }

  async findById(id: string): Promise<User> {
    return await this.usersRepository.findOneOrFail(id)
  }

  async update(id, user) {
    return await this.usersRepository.update({ id }, user)
  }

  async delete(id) {
    return await this.usersRepository.delete(id)
  }
}
