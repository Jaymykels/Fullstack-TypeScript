import * as mongoose from 'mongoose';

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
    name: string;
    type: string;
    period: string;
    Year: number;
    Assignee: string;
    Deadline: string;
    Submitted: boolean;
    url: string;
    companyId?: string
}