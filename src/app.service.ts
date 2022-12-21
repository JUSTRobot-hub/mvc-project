import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';
@Injectable()
export class AppService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getUsers() {
    return { users: await this.userModel.find() };
  }

  createUser() {
    return this.userModel.create({
      name: 'Mostafa Ahmed',
      email: 'mostafa@mvc.com',
      age: 20,
      password: '123456',
    });
  }
}
