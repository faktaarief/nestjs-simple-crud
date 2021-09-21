import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "@nestjs/common";
import { Response } from "express";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(@Res() res: Response) {
    const users = await this.usersService.findAll()
    return res.json(users)
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    try {
      const user = await this.usersService.create(createUserDto)
      return res.json(user)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  @Get('/:id')
  async findById(@Param('id') id: string, @Res() res: Response) {
    try {
      const user = await this.usersService.findById(id)
      return res.json(user)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() userField: {}, @Res() res: Response) {
    try {
      const user = await this.usersService.update(id, userField)
      return res.json(user)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  @Delete('/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    try {
      const user = await this.usersService.delete(id)
      return res.json(user)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}