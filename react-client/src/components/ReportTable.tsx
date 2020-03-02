import React, { useState, useEffect } from 'react';

export interface Report {
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
    title: string
}

const ReportTable: React.SFC<ReportTableProps> = ({ reports, title }) => {
    const [isAscending, setIsAscending] = useState(false)
    const [data, setData] = useState<Report[]>([])

    const sortSubmitted = () => {
        const sortData = isAscending ? [...data].reverse() : [...data].sort((a, b) => a.Submitted.toString() > b.Submitted.toString() ? 1 : b.Submitted.toString() > a.Submitted.toString() ? -1 : 0)
        setData([...sortData])
        setIsAscending(!isAscending)
    }

    useEffect(() => {
        setData(reports)
    }, [])

    return (
        <div className="mt-6">
            <h2 className="text-xl text-purple-700 font-semibold leading-tight">{title}</h2>
            <table className=" my-4 text-left w-full">
                <thead className="bg-gray-300 flex w-full">
                    <tr className="flex w-full mb-4">
                        <th className="p-4 w-1/4">Name</th>
                        <th className="p-4 w-1/4">Period</th>
                        <th className="p-4 w-1/4">Assignee</th>
                        <th className="p-4 w-1/4" onClick={() => sortSubmitted()}>Submitted</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-100 flex flex-col items-center overflow-y-scroll w-full h-64">
                    {
                        data.map((report, index) => (
                            <tr className="flex w-full mb-4" key={index} onClick={() => { window.location.href = report.url }}>
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