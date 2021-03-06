import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm' 
import { Connection, getConnectionOptions } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor(private connection: Connection) {}
}
