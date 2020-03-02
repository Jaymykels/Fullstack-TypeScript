import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export const CompanySchema = new mongoose.Schema({
    name: String,
    address: String,
    email: String,
    description: String,
    reports: Array
});

export interface Company extends mongoose.Document {
    id?: string,
    _id?: string,
    name: string,
    address: string,
    email: string,
    description: string,
    reports: any[]
}

export class CompanyDTO {
    @ApiProperty()
    name: string;
    @ApiProperty()
    address: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    reports: any[];
}