import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import Product from './Product';

const Products = () => {
    const products = useLoaderData();

    const [bookingProduct, setBookingProduct] = useState(null);

    return (
        <div className='my-6'>
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                    setBookingProduct={setBookingProduct}
                ></Product>)
            }
            <div>
                {
                    bookingProduct &&
                    <BookingModal
                        bookingProduct={bookingProduct}
                    ></BookingModal>
                }
            </div>
        </div>
    );
};

export default Products;