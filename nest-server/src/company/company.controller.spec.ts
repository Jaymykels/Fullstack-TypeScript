import { Test, TestingModule } from '@nestjs/testing';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { Company } from './company.model';
import { CompanyModule } from './company.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

describe('Company Controller', () => {
  let companyController: CompanyController;
  let companyService: CompanyService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [CompanyModule, MongooseModule.forRootAsync({
        useFactory: async () => {
          const mongod = new MongoMemoryServer();
          const uri = await mongod.getConnectionString();
          return {
            uri: uri
          }
        }
      })]
    }).compile();

    companyService = app.get<CompanyService>(CompanyService);
    companyController = app.get<CompanyController>(CompanyController);
  });
  
  it('should call company service to create a company', async () => {
    const company : Company = {
      name: 'Stears Business Ltd',
      address: '8a Sir Samuel Manuwa, Victoria Island, Lagos',
      email: 'talktome@stearsng.com',
      description: 'Stears Business, our publishing arm, provides business news analysis and insight through its network of journalists and professionals in banking, consulting, law, academia, government and civil society. Our Writer’s Network includes writers based in Nigeria, Canada, United States and the United Kingdom.',
      reports: [1,2,10]
    }
    jest.spyOn(companyService, 'createCompany').mockImplementation(() => Promise.resolve(company));

    expect(await companyController.store(company)).toBe(company);
  });
});
