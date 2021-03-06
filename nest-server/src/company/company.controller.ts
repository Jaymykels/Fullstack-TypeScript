import { Controller, Get, Post, Body, Param } from '@nestjs/common';
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

    @Get(':id') 
    find(@Param('id') id): Promise<Company|string> {
        return this.companyService.getCompany(id)
    }

    @Get()
    index(): Promise<Company[]> {
        return this.companyService.getCompanies()
    }
}
