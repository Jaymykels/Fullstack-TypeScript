import { Test, TestingModule } from '@nestjs/testing';
import { ReportService } from './report.service';
import { Report } from './report.model';
import { AppModule } from '../app.module';
import { ReportModule } from './report.module';
import { CompanyService } from '../company/company.service';

describe('ReportService', () => {
  let reportService: ReportService;
  let companyService: CompanyService

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
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppModule, ReportModule]
    }).compile();

    reportService = app.get<ReportService>(ReportService)
    companyService = app.get<CompanyService>(CompanyService)
  });

  it('should create report', async () => {
    const newReport= await reportService.createReport(report);

    expect(newReport).toMatchObject(report);
  });

  it('should call company service if report has companyId', async () => {
     const company = jest.spyOn(companyService, 'updateReports')

    await reportService.createReport({...report, companyId: '1'});
    expect(company).toHaveBeenCalled();
  })

  it('should get reports', async () => {
    const newReport= await reportService.createReport(report);
    const reports = await reportService.getReports({});

    expect(reports).toEqual(
      expect.arrayContaining([
        expect.objectContaining({_id: newReport.id})
      ])
    );
  });
});
