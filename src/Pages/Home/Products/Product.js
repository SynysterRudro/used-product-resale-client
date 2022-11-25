
const Product = ({ product, setBookingProduct }) => {
    const { img, product_name, location, original_price, resale_price, yearsUsed, date, seller_name } = product;
    return (
        <div className='w-1/2 mx-auto mb-16'>
            <div className="card shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">{product_name}</h2>
                    <p>Seller name - {seller_name}</p>
                    <p>Location - {location}</p>
                    <p>Original Price - {original_price}</p>
                    <p>Resale Price - {resale_price}</p>
                    <p>Years used - {yearsUsed}</p>
                    <p>Published date - {date}</p>
                    <div className="card-actions justify-center">
                        {/* <button className="btn btn-primary">Book Now</button> */}
                        {/* The button to open modal */}
                        <label htmlFor="booking-modal"
                            onClick={() => setBookingProduct(product)}
                            className="btn btn-primary">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;