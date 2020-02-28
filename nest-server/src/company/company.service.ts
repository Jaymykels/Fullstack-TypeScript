import { Injectable, NotFoundException } from '@nestjs/common';
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
  
  async getCompany(id: string): Promise<Company|string> {
    try {
        return await this.findCompany(id);
    } catch (error) {
        return 'Could not find company';
    }
  }

  private async findCompany(id: string): Promise<Company> {
    let company;
    try {
      company = await this.companyModel.findOne({ _id: id})
    } catch (error) {
      throw new NotFoundException('Could not find company.');
    }
    return company;
  }
}
