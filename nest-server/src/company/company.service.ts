import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './company.model';
import { Model } from 'mongoose'

@Injectable()
export class CompanyService {
  constructor(@InjectModel('Company') private readonly companyModel: Model<Company>){}

  async createCompany(company: Company): Promise<Company> {
    const newCompany = new this.companyModel(company);
    const result = await newCompany.save();
    return {...company, id: result.id}
  }
}
