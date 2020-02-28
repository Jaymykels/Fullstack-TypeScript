import { Module } from '@nestjs/common';
import { MongooseModule  } from '@nestjs/mongoose'
import { ConfigModule} from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [ConfigModule.forRoot(), CompanyModule, ReportModule, MongooseModule.forRoot(process.env.DB_URL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 