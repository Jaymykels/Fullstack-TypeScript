import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { HttpStatus } from '@nestjs/common';
import { ReportModule } from '../src/report/report.module';
import { ReportService } from '../src/report/report.service';
import { Report } from '../src/report/report.model';

describe('ReportController (e2e)', () => {
  let app;
  let reportService: ReportService;

  const report: Report = {
    name: "Balance Sheet Quarter 1 of year 2020",
    type: "balance-sheet",
    period: "Q1",
    Year: 2020,
    Assignee: "Madam Malaika Kalakuta",
    Deadline: "2020-02-04T10:49:41.603Z",
    Submitted: true,
    url: "/path/to/report.pdf",
  }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, ReportModule],
    }).compile();
    
    reportService = moduleFixture.get<ReportService>(ReportService);
    app = moduleFixture.createNestApplication();
    await app.init();

  });

  it('Be able to create a new company with POST /companies', () => {
    
    return request(app.getHttpServer())
      .post('/reports')
      .set('Accept', 'application/json')
      .send(report)
      .expect(({ body }) => {
        expect(body.id).toBeDefined();
        expect(body).toMatchObject(report)
      })
      .expect(HttpStatus.CREATED);
  });
});
