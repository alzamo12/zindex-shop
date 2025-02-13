import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useProducts = ({type}) => {
    const axiosSecure = useAxiosSecure();
    
    const { data: products = [] } = useQuery({
        queryKey: ['product', type],
        queryFn: async () => {
            const res = await axiosSecure.get(`/products?type=${type}`)
            return res.data
        }
    });
    console.log(products)

    return products
};

export default useProducts;