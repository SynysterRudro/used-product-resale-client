import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModal = ({ bookingProduct }) => {

    const { user } = useContext(AuthContext);

    const { email } = user;
    const { seller_name, product_name, resale_price } = bookingProduct;


    const handleSubmit = event => {
        event.prevenDefault();
    }

    return (
        <>


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <h3 className='text-2xl font-bold mb-6'>Confirm Booking</h3>
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={seller_name} placeholder="Type here" className="input input-bordered w-full  mb-6" disabled />
                        <input type="text" value={email} placeholder="Type here" className="input input-bordered w-full  mb-6" disabled />
                        <input type="text" value={product_name} placeholder="Type here" className="input input-bordered w-full  mb-6" disabled />
                        <input type="text" value={resale_price} placeholder="Type here" className="input input-bordered w-full  mb-6" disabled />

                        <input type="text" placeholder="phone number" className="input input-bordered w-full mb-6" />
                        <input type="text" placeholder="meeting place" className="input input-bordered w-full mb-6" />
                        <br />

                        <input className='btn btn-primary w-full' type="submit" value="Book" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;