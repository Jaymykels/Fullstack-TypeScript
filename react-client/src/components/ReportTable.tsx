import * as React from 'react';

interface Report {
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
export interface ReportTableProps {
    reports: Report[],
    comapnyName: string
}

const ReportTable: React.SFC<ReportTableProps> = ({reports, comapnyName}) => {
    return (
        <div className="mt-6">
            <h2 className="text-xl text-purple-700 font-semibold leading-tight">{comapnyName} reports for 2020</h2>
            <table className=" my-4 text-left w-full">
                <thead className="bg-gray-300 flex w-full">
                    <tr className="flex w-full mb-4">
                        <th className="p-4 w-1/4">Name</th>
                        <th className="p-4 w-1/4">Period</th>
                        <th className="p-4 w-1/4">Assignee</th>
                        <th className="p-4 w-1/4">Submitted</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-100 flex flex-col items-center overflow-y-scroll w-full h-64">
                    {
                        reports.map((report, index) => (
                            <tr className="flex w-full mb-4" key={index}>
                                <td className="p-4 w-1/4">{report.name}</td>
                                <td className="p-4 w-1/4">{report.period}</td>
                                <td className="p-4 w-1/4">{report.Assignee}</td>
                                <td className="p-4 w-1/4">{report.Submitted.toString()}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ReportTable;