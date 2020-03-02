import React, { useState, useEffect } from 'react';
import { searchKeyword } from '../requests';
import CompanyCard, { CompanyCardProps } from '../components/CompanyCard';
import ReportTable, { Report } from '../components/ReportTable';
import Search from '../components/Search';
import Loading from '../components/Loading';

export interface SearchResultProps {
    match: any
}

interface Result extends CompanyCardProps {
    reports: Report[]
}

const SearchResult: React.SFC<SearchResultProps> = ({match}) => {
    const [results, setResults] = useState<Result[]>([])
    const [initialized, setInitialized] = useState(false);
    
    const search = async (keyword: string) => {
        const response = await searchKeyword(keyword)
        setResults(response.data)
        setInitialized(true)
    }

    useEffect(() => {
        search(match.params.keyword);
    })

    return ( 
        <div className="mb-16">
            <Search isResult={true} keyword={match.params.keyword}/>
            {!initialized && <Loading/>}
            {
                initialized && results.map((result, index) => (
                    <div className="my-4" key={index}>
                        <CompanyCard {...result} />
                        <div>
                            <ReportTable reports={result.reports} title={`${result.name} reports for search result`}/>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
 
export default SearchResult;