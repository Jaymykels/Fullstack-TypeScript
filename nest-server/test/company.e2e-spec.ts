import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { Company } from '../src/company/company.model';
import { HttpStatus } from '@nestjs/common';

describe('CompanyController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Be able to create a new company with POST /companies', () => {
    const company : Company = {
      name: 'Stears Business Ltd',
      address: '8a Sir Samuel Manuwa, Victoria Island, Lagos',
      email: 'talktome@stearsng.com',
      description: 'Stears Business, our publishing arm, provides business news analysis and insight through its network of journalists and professionals in banking, consulting, law, academia, government and civil society. Our Writer’s Network includes writers based in Nigeria, Canada, United States and the United Kingdom.',
      reports: [1,2,10]
    }
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
});
