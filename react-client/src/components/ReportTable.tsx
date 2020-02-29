import * as React from 'react';

export interface ReportTableProps {

}

const ReportTable: React.SFC<ReportTableProps> = () => {
    return (
        <div>
            <div>
                <h2 className="text-xl text-purple-700 font-semibold leading-tight">Reports</h2>
            </div>
            <table className=" my-4 text-left w-full">
                <thead className="bg-gray-300 flex w-full">
                    <tr className="flex w-full mb-4">
                        <th className="p-4 w-1/4">One</th>
                        <th className="p-4 w-1/4">Two</th>
                        <th className="p-4 w-1/4">Three</th>
                        <th className="p-4 w-1/4">Four</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-100 flex flex-col items-center overflow-y-scroll w-full h-64">
                    <tr className="flex w-full mb-4">
                        <td className="p-4 w-1/4">Dogs</td>
                        <td className="p-4 w-1/4">Cats</td>
                        <td className="p-4 w-1/4">Birds</td>
                        <td className="p-4 w-1/4">Fish</td>
                    </tr>
                    <tr className="flex w-full mb-4">
                        <td className="p-4 w-1/4">Dogs</td>
                        <td className="p-4 w-1/4">Cats</td>
                        <td className="p-4 w-1/4">Birds</td>
                        <td className="p-4 w-1/4">Fish</td>
                    </tr>
                    {/* <tr className="flex w-full mb-4">
                    <td className="p-4 w-1/4">Dogs</td>
                    <td className="p-4 w-1/4">Cats</td>
                    <td className="p-4 w-1/4">Birds</td>
                    <td className="p-4 w-1/4">Fish</td>
                    </tr>
                    <tr className="flex w-full mb-4">
                    <td className="p-4 w-1/4">Dogs</td>
                    <td className="p-4 w-1/4">Cats</td>
                    <td className="p-4 w-1/4">Birds</td>
                    <td className="p-4 w-1/4">Fish</td>
                    </tr>
                    <tr className="flex w-full mb-4">
                    <td className="p-4 w-1/4">Dogs</td>
                    <td className="p-4 w-1/4">Cats</td>
                    <td className="p-4 w-1/4">Birds</td>
                    <td className="p-4 w-1/4">Fish</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
}

export default ReportTable;