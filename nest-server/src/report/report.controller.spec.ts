import { Test, TestingModule } from '@nestjs/testing';
import { ReportController } from './report.controller';
import { ReportModule } from './report.module';
import { AppModule } from '../app.module';
import { ReportService } from './report.service';
import { Report } from './report.model';

describe('Report Controller', () => {
  let reportController: ReportController;
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
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppModule, ReportModule]
    }).compile();

    reportController = app.get<ReportController>(ReportController);
    reportService = app.get<ReportService>(ReportService)
  });

  it('should call report service to create a report', async () => {
    jest.spyOn(reportService, 'createReport').mockImplementation(() => Promise.resolve(report));

    expect(await reportController.store(report)).toBe(report);
  });

  it('should call report service to get a reports', async () => {
    const getReports = jest.spyOn(reportService, 'getReports')
    const query = {}
    await reportController.index(query)
    expect(getReports).toHaveBeenCalledWith(query);
  });
});
