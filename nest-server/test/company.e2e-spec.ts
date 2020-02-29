import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { Company } from '../src/company/company.model';
import { HttpStatus } from '@nestjs/common';
import { CompanyService } from '../src/company/company.service';
import { CompanyModule } from '../src/company/company.module';

describe('CompanyController (e2e)', () => {
  let app;
  let companyService: CompanyService;
  
  const company : Company = {
    name: 'Stears Business Ltd',
    address: '8a Sir Samuel Manuwa, Victoria Island, Lagos',
    email: 'talktome@stearsng.com',
    description: 'Stears Business, our publishing arm, provides business news analysis and insight through its network of journalists and professionals in banking, consulting, law, academia, government and civil society. Our Writer’s Network includes writers based in Nigeria, Canada, United States and the United Kingdom.',
    reports: [1,2,10]
  }
  
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, CompanyModule],
    }).compile();
    
    companyService = moduleFixture.get<CompanyService>(CompanyService);
    app = moduleFixture.createNestApplication();
    await app.init();

  });

  it('Be able to create a new company with POST /companies', () => {
    
    return request(app.getHttpServer())
      .post('/companies')
      .set('Accept', 'application/json')
      .send(company)
      .expect(({ body }) => {
        expect(body.id).toBeDefined();
        expect(body).toMatchObject(company)
      })
      .expect(HttpStatus.CREATED);
  });

  it('Be able to get a single company with /companies/:companyId', async () => {
    const newCompany = await companyService.createCompany(company)
    return request(app.getHttpServer())
      .get('/companies/'+newCompany.id)
      .expect(({ body }) => {
        expect(body._id).toEqual(newCompany.id);
        expect(body).toMatchObject(company)
      })
      .expect(HttpStatus.OK);
  });

  it('Be able to get a list of all companies with GET /companies', async () => {
    const newCompany = await companyService.createCompany(company)
    return request(app.getHttpServer())
      .get('/companies')
      // .expect(({ body }) => {
      //   expect(body).toEqual(
      //     expect.arrayContaining([
      //       expect.objectContaining({_id: newReport.id})
      //     ])
      //   );
      // })
      .expect(HttpStatus.OK);
  });
});
