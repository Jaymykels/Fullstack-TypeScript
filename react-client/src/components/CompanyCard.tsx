import * as React from 'react';

export interface CompanyCardProps {
    id?: string,
    name: string,
    address: string,
    email: string,
    description: string,
    reports: any[]
}

const CompanyCard: React.SFC<CompanyCardProps> = ({ name, address, email, description, reports}) => {
    return (
        <div className="px-10 py-6 bg-white rounded-lg shadow-md mb-4">
            <div className="flex justify-between items-center">
                <span className="font-light text-gray-600"></span>
                <div className="px-2 py-1 bg-purple-600 text-purple-100 font-bold rounded">{reports.length} reports</div>
            </div>
            <div className="mt-2">
                <a className="text-2xl text-gray-700 font-bold hover:text-gray-600" href="#">{name}</a>
    <p className="mt-2 text-gray-600">{description}</p>
            </div>
            <div className="mt-4">
                <div className="text-purple-600">{email}</div>
                <div>
                    <h1 className="text-gray-700 font-bold">{address}</h1>
                </div>
            </div>
        </div>
    );
}

export default CompanyCard;