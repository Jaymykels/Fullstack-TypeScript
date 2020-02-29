import { Test, TestingModule } from '@nestjs/testing';
import { CompanyService } from './company.service';
import { Company } from './company.model';
import { AppModule } from '../app.module';
import { CompanyModule } from './company.module';

describe('CompanyService', () => {
  let service: CompanyService;
  
  const company : Company = {
    name: 'Stears Business Ltd',
    address: '8a Sir Samuel Manuwa, Victoria Island, Lagos',
    email: 'talktome@stearsng.com',
    description: 'Stears Business, our publishing arm, provides business news analysis and insight through its network of journalists and professionals in banking, consulting, law, academia, government and civil society. Our Writer’s Network includes writers based in Nigeria, Canada, United States and the United Kingdom.',
    reports: [1,2,10]
  }

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppModule, CompanyModule]
    }).compile();

    service = app.get<CompanyService>(CompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create company', async () => {
    const newCompany = await service.createCompany(company);

    expect(newCompany).toMatchObject(company);
  });

  it('should return message if company with id does not exist', async () => {
    const result = await service.getCompany('1');

    expect(result).toBe('Could not find company');
  });

  it('should find company by id', async () => {
    const newCompany = await service.createCompany(company);
    const result = await service.getCompany(newCompany.id);

    expect(result.toString()).toContain(newCompany.id)
  });

  it('should update company report', async () => {
    const newCompany = await service.createCompany(company);
    const reportId = 'hjh4j3h4uh22'
    const result = await service.updateReports(newCompany.id, reportId);

    expect(result.toString()).toContain(reportId);
  });

  it('should get companies', async () => {
    const newCompany= await service.createCompany(company);
    const companies = await service.getCompanies();

    expect(companies.toString()).toContain(newCompany.id)
  });
});
