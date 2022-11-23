import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import ProductCategory from '../ProductCategory/ProductCategory';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <ProductCategory></ProductCategory>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;