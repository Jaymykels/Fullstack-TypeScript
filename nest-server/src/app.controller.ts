import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ReportService } from './report/report.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly reportService: ReportService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/search')
  search(@Query() query): Promise<any> {
      const keyword = query['keyword'] ? query.keyword : ''
      return this.reportService.search(keyword)
  }
}
