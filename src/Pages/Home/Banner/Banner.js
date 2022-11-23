import React from 'react';

const Banner = () => {

    return (
        <div className="hero my-16">
            <div className="hero-content flex-col lg:flex-row">
                <img src='https://i.ibb.co/D4LS91c/pic-1.jpg' className="w-1/2" alt='carousel-img' />
                <div>
                    <h1 className="text-5xl font-bold">Welcome to Mobo Sell</h1>
                    <p className="py-6">We provide the best service in buying selling second hand products.Client satisfaction is our main motto here.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;