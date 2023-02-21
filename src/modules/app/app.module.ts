import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from '../user/user.module';
import configuration from 'src/configuration';
import {SequelizeModule} from '@nestjs/sequelize';
import { User } from '../user/model';
import { AuthModule } from '../auth/auth.module';
import { TokenModule } from '../token/token.module';


@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration]
  }),
  SequelizeModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      dialect: "postgres",
      host: configService.get("db_host"),
      port: configService.get("db_port"),
      password: configService.get("db_password"),
      database: configService.get("db_name"),
      username: configService.get("db_username"),
      synchronize: true,
      autoLoadModels: true,
      models: [User]

    })
  }),
  UserModule,
  AuthModule,
  TokenModule,
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
