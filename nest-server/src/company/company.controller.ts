import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { Company, CompanyDTO } from './company.model';
import { CompanyService } from './company.service';

@Controller('companies')
export class CompanyController {
    constructor(private readonly companyService: CompanyService){}
    
    @Post()
    async store(@Body() params: CompanyDTO): Promise<Company> {
        const company = await this.companyService.createCompany(params)
        return company
    }
}
