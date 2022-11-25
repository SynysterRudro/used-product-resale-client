import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import SingleProduct from './SingleProduct';

const MyProduct = () => {
    const { user } = useContext(AuthContext);


    const { data: products, isLoading } = useQuery({
        queryKey: ['productCategory'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproducts?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })


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