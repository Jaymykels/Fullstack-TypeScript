import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportDTO, Report } from './report.model';

@Controller('reports')
export class ReportController {
    constructor(private readonly reportService: ReportService){}

    @Post()
    async store(@Body() params: ReportDTO): Promise<Report> {
        return await this.reportService.createReport(params);
    }

    @Get()
    async index(@Query() query): Promise<Report[]> {
        return await this.reportService.getReports(query);
    }
}
