import { Injectable } from '@nestjs/common';
import { Report } from './report.model';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { CompanyService } from '../company/company.service';


@Injectable()
export class ReportService {
    constructor(@InjectModel('Report') private readonly reportModel: Model<Report>, private readonly companyService: CompanyService){}

    async createReport(report: Report): Promise<Report> {
        const newReport = new this.reportModel(report);
        const result = await newReport.save();
        if(report.companyId)
            this.companyService.updateReports(report.companyId, result._id)
        return {...report, id: result._id}
    }
}
