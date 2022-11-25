import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import Loading from '../Shared/Loading/Loading';
import SingleProduct from './SingleProduct';

const MyProduct = () => {
    const { user } = useContext(AuthContext);


    const { data: products, isLoading } = useQuery({
        queryKey: ['productCategory'],
        queryFn: async () => {
            const res = await fetch(`https://used-products-resale-server-two.vercel.app/myproducts?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            {
                products &&
                products.map(product => <SingleProduct
                    key={product._id}
                    product={product}
                ></SingleProduct>)
            }
        </div>
    );
};

export default MyProduct;