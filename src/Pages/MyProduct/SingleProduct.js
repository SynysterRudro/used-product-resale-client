import React from 'react';

const SingleProduct = ({ product }) => {
    const { product_name, img, resale_price, condition } = product;
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Product name</th>
                            <th>Product Image</th>
                            <th>Price</th>
                            <th>Condition</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <p>Unsold</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {product_name}
                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={img} alt="imageNotGiven" />
                                    </div>
                                </div>
                            </td>

                            <td>
                                {resale_price}
                            </td>
                            <td>
                                {condition}
                            </td>

                            <td>
                                <button className='btn btn-primary text-white'>Advertise</button>
                            </td>

                        </tr>

                    </tbody>

                </table>
                <hr />
            </div>
        </div>
    );
};

export default SingleProduct;