import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export const ReportSchema = new mongoose.Schema({
    name: String,
    type: String,
    period: String,
    Year: Number,
    Assignee: String,
    Deadline: String,
    Submitted: Boolean,
    url: String,
    companyId: String
});

export interface Report extends mongoose.Document {
    id?: string,
    name: string,
    type: string,
    period: string,
    Year: number,
    Assignee: string,
    Deadline: string,
    Submitted: boolean,
    url: string,
    companyId?: string
}

export class ReportDTO {
    @ApiProperty()
    name: string;
    @ApiProperty()
    type: string;
    @ApiProperty()
    period: string;
    @ApiProperty()
    Year: number;
    @ApiProperty()
    Assignee: string;
    @ApiProperty()
    Deadline: string;
    @ApiProperty()
    Submitted: boolean;
    @ApiProperty()
    url: string;
    @ApiProperty()
    companyId?: string
}