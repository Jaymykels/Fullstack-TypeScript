import React, { useEffect, useState } from 'react';
import CompanyCard, { CompanyCardProps } from '../components/CompanyCard';
import { getCompanies } from '../requests';
import Search from '../components/Search';
import { Link } from 'react-router-dom';

export interface HomeProps {

}

const Home: React.SFC<HomeProps> = () => {
    const [companies, setCompanies] = useState<CompanyCardProps[]>([]);
    const [initialized, setInitialized] = useState(false);

    const getData = async () => {
        const response = await getCompanies();
        setCompanies(response.data)
        setInitialized(true)
    };

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            {!initialized && (
            <h1 className="text-gray-800 text-center lg:pl-10 lg:text-4xl text-xl font-semibold">
                {/* Searching for <span className="text-gray-500">keyword</span> */}
                Loading...
            </h1>)}

            <div className="mt-6">
                {initialized && companies.map((company, index) => <Link to={`/details/${company._id}`}><CompanyCard key={index} {...company} /> </Link>)}
            </div>
        </div>
    );
}

export default Home;