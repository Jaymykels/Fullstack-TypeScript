import { Injectable } from '@nestjs/common';
import { Report } from './report.model';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { CompanyService } from '../company/company.service';
import { Company } from 'src/company/company.model';
import * as elasticsearch from 'elasticsearch';


@Injectable()
export class ReportService {
    private elascticClient: elasticsearch.Client
    constructor(@InjectModel('Report') private readonly reportModel: Model<Report>, private readonly companyService: CompanyService) {
        this.elascticClient = new elasticsearch.Client({
            host: process.env.ELASTIC_HOST,
        })
    }

    async createReport(report: Report): Promise<Report> {
        const newReport = new this.reportModel(report);
        const result = await newReport.save();
        const body = report
        if (report.companyId) {
            var company: Company = await this.companyService.updateReports(report.companyId, result._id)
            company && (body['companyName'] = company.name)
        }
        await this.elascticClient.index({
            index: 'reports',
            type: 'reports',
            id: result.id,
            body
        })
        return { ...report, id: result._id }
    }

    async getReports(query: any): Promise<Report[]> {
        return this.reportModel.find(query);
    }

    async search(keyword: string) {
        const result = await this.elascticClient.search({
            index: 'reports',
            body: {
                query: {
                    multi_match: {
                        query: keyword,
                        fields: ["name", "type", "companyName"]
                    }
                }
            }
        })

        const companies = await this.companyService.getCompanies()
        
        let key;
        const groupResult =  result.hits.hits.reduce(function (r, a) {
            key = a._source['companyId'] || 'others';
            r[key] = r[key] || [];
            r[key].push(a._source);
            return r;
        }, Object.create(null));

        const ids = Object.keys(groupResult)
        const filter = companies.filter(e => ids.includes(e._id.toString()))
        filter.map(el => (el.reports  = groupResult[el._id.toString()]))
        
        return filter
    }

    async dropDatabase(): Promise<void> {
        await this.reportModel.deleteMany({}, err => err && console.log(err))
        await this.elascticClient.deleteByQuery({
            index: 'reports',
            type: 'reports',
            body: {
                query: {
                    match_all: {}
                }
            }
        })
    }
}
