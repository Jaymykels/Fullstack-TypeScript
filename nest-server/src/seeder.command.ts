import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { AppService } from './app.service';
 
@Injectable()
export class SeedCommand {
  constructor(
    private readonly appService: AppService,
  ) { }
 
  @Command({ command: 'seed', describe: 'create dummy records in database', autoExit: true })
  async create() {
    console.log('seeding data')
    await this.appService.seedData()
  }
}