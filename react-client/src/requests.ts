import axios from 'axios'
const APIURL = 'http://localhost:5000';

export const getCompanies = () => axios.get(`${APIURL}/companies`);
