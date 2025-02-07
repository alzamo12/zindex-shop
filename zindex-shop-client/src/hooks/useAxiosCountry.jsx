import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useAxiosCountry = () => {

    const { data: country } = useQuery({
        queryKey: ['country'],
        queryFn: async () => {
            const res = await axios.get('https://countriesnow.space/api/v0.1/countries/')
            return res.data.data
        }
    })

    return country
};

export default useAxiosCountry;