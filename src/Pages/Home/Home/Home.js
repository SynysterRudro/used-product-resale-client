import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Carousel from '../Carousel/Carousel';
import ProductCategory from '../ProductCategory/ProductCategory';

const Home = () => {
    return (
        <div >
            <Carousel></Carousel>
            <AdvertisedItems></AdvertisedItems>
            <ProductCategory></ProductCategory>
        </div>
    );
};

export default Home;