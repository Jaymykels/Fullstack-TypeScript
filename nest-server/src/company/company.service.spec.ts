import { Test, TestingModule } from '@nestjs/testing';
import { CompanyService } from './company.service';
import { Company } from './company.model';
import { CompanyModule } from './company.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

describe('CompanyService', () => {
  let service: CompanyService;

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

    service = app.get<CompanyService>(CompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create company', async () => {
    const company : Company = {
      name: 'Stears Business Ltd',
      address: '8a Sir Samuel Manuwa, Victoria Island, Lagos',
      email: 'talktome@stearsng.com',
      description: 'Stears Business, our publishing arm, provides business news analysis and insight through its network of journalists and professionals in banking, consulting, law, academia, government and civil society. Our Writer’s Network includes writers based in Nigeria, Canada, United States and the United Kingdom.',
      reports: [1,2,10]
    }
    const newCompany = await service.createCompany(company);

    expect(newCompany).toMatchObject(company);
  });
});
