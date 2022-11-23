import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import ProductCategory from '../ProductCategory/ProductCategory';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <ProductCategory></ProductCategory>
        </div>
    );
};

export default Home;