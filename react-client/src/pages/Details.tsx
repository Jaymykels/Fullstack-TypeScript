import React, { useState, useEffect } from 'react';
import { fetchCompanyReports } from '../requests';
import CompanyCard, { CompanyCardProps } from '../components/CompanyCard';
import ReportTable from '../components/ReportTable';

export interface DetailsProps {
    match: any
}
 
const Details: React.SFC<DetailsProps> = ({match}) => {
    const [company, setCompany] = useState<CompanyCardProps>({name: '', address: '', email: '', description: '', reports: []});
    const [reports, setReports] = useState([])
    const [initialized, setInitialized] = useState(false);

    const getCompanyReports = async (id: string) => {
        const response = await fetchCompanyReports(id)
        setCompany(response[0].data)
        setReports(response[1].data)
        setInitialized(true)
    }

    useEffect(() => {
        getCompanyReports(match.params.companyId);
    }, [match])
    
    return (
        <div>
            {!initialized && (
            <h1 className="text-gray-800 text-center lg:pl-10 lg:text-4xl text-xl font-semibold">
                {/* Searching for <span className="text-gray-500">keyword</span> */}
                Loading...
            </h1>)}

            <div className="mt-6">
                {initialized && (
                    <div>
                        <CompanyCard {...company} />
                        <div>
                            <ReportTable reports={reports} comapnyName={company.name}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default Details;