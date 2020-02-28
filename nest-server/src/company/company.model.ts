import * as mongoose from 'mongoose';

export const CompanySchema = new mongoose.Schema({
    name: String,
    address: String,
    email: String,
    description: String,
    reports: Array
});

export interface Company extends mongoose.Document {
    id?: string,
    name: string,
    address: string,
    email: string,
    description: string,
    reports: number[]
}

export class CompanyDTO {
    name: string;
    address: string;
    email: string;
    description: string;
    reports: number[];
}