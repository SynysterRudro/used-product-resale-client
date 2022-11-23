import { useQuery } from '@tanstack/react-query';
import React from 'react';

import Loading from '../../Shared/Loading/Loading';
import Category from './Category';

const ProductCategory = () => {

    const { data: categories, isLoading } = useQuery({
        queryKey: ['productCategory'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/productcategories`)
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-16'>
            <h2 className="text-3xl font-bold text-center">Product Categories {categories.length}</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default ProductCategory;