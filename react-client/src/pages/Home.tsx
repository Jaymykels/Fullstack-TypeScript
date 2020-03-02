import React, { useEffect, useState } from 'react';
import CompanyCard, { CompanyCardProps } from '../components/CompanyCard';
import { getCompanies } from '../requests';
import Search from '../components/Search';
import { Link, useHistory } from 'react-router-dom';
import Loading from '../components/Loading';

export interface HomeProps {

}

const Home: React.SFC<HomeProps> = () => {
    const [companies, setCompanies] = useState<CompanyCardProps[]>([]);
    const [initialized, setInitialized] = useState(false);
    const history = useHistory()

    const getData = async () => {
        const response = await getCompanies();
        setCompanies(response.data)
        setInitialized(true)
    };

    const onSearch = (keyword: string) => {
        history.push(`/results/${keyword}`)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <Search isResult={false} search={onSearch}/>
            {!initialized && <Loading/>}

            <div className="my-6">
                {initialized && companies.map((company, index) => <Link to={`/details/${company._id}`} key={index}><CompanyCard {...company} /> </Link>)}
            </div>
        </div>
    );
}

export default Home;