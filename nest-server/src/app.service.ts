import { Injectable } from '@nestjs/common';
import { CompanyService } from './company/company.service';
import { ReportService } from './report/report.service';
import { Company } from './company/company.model';
import { Report } from './report/report.model';


@Injectable()
export class AppService {
  constructor(private readonly companyService: CompanyService, private readonly reportService: ReportService){}
  getHello(): string {
    return 'Hello World!';
  }
  
  async seedData(): Promise<void> {
    await this.companyService.dropDatabase()
    await this.reportService.dropDatabase()

    const description = (company) => `${company}, our publishing arm, provides business news analysis and insight through its network of journalists and professionals in banking, consulting, law, academia, government and civil society. Our Writer’s Network includes writers based in Nigeria, Canada, United States and the United Kingdom.`
    
    const companies : Company[] = [
      {
        name: 'Andela',
        address: '235 Ikorodu Rd, Ilupeju, Lagos',
        email: 'talktome@andela.com',
        description: description('Andela'),
        reports: []
      },
      {
        name: 'Interswitch Group',
        address: '1648C Oko Awo St, Victoria Island, Lagos',
        email: 'talktome@interswitch.com',
        description: description('Interswitch Group'),
        reports: []
      },
      {
        name: 'Stears Business Ltd',
        address: '8a Sir Samuel Manuwa, Victoria Island, Lagos',
        email: 'talktome@stears.com',
        description: description('Stears Business Ltd'),
        reports: []
      },
      {
        name: 'Credit Clan',
        address: 'Plot 1038b Ologun Agbaje St, Victoria Island, Lagos',
        email: 'talktome@creditclan.com',
        description: description('Credit Clan'),
        reports: []
      },
      {
        name: 'Global Info Swift',
        address: '17 Glover Rd, Ikoyi, Lagos',
        email: 'talktome@gis.com',
        description: description('Global Info Swift'),
        reports: []
      }
    ]

    for (let i = 0; i < companies.length; i++) {      
      const newCompany = await this.companyService.createCompany(companies[i])
      const numReports = Math.floor(Math.random() * (7 - 2 + 1)) + 2
      for (let j = 0; j < numReports; j++) {
        const report: Report = {
          name: `${newCompany.name} report #${j}`,
          type: "balance-sheet",
          period: `Q${j}`,
          Year: [2020, 2019, 2018][Math.floor(Math.random()*3)],
          Assignee: 'Michael Ezeokoye',
          Deadline: Date.now().toString(),
          Submitted: [true, false][Math.floor(Math.random()*2)],
          url: 'https://michaelezeokoye.dev',
          companyId: newCompany.id
        }
        const newReport = await this.reportService.createReport(report)
        await this.companyService.updateReports(newCompany.id, newReport.id)
      }
    }
  }
}
