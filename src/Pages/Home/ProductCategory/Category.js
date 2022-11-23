import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    // console.log(category);
    const { name, img, _id } = category;
    return (
        <div className="card shadow-xl">
            <figure><img className='h-[200px]' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-3xl font-bold text-center">{name}</h2>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary"><Link to={`/products/${_id}`}>View Products</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Category;