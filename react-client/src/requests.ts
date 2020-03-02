import axios from 'axios'
const APIURL = process.env.REACT_APP_APIURL;

export const getCompanies = () => axios.get(`${APIURL}/companies`);

export const fetchCompanyReports = (id: string) => axios.all([
    axios.get(`${APIURL}/companies/${id}`),
    axios.get(`${APIURL}/reports?companyId=${id}&Year=2020`)
])

export const searchKeyword = (keyword: string) => axios.get(`${APIURL}/search?keyword=${keyword}`)