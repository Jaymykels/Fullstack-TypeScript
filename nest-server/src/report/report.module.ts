import { Module } from '@nestjs/common';
import { MongooseModule  } from '@nestjs/mongoose'
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { ReportSchema } from './report.model';
import { CompanyModule } from '../company/company.module';

@Module({
  imports: [CompanyModule, MongooseModule.forFeature([{ name: 'Report', schema: ReportSchema}])],
  controllers: [ReportController],
  providers: [ReportService],
  exports: [ReportService]
})
export class ReportModule {}
