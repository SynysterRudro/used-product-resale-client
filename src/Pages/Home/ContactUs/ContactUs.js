import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-6">Contact with us</h2>
            <section className='flex flex-col bg-slate-800 mb-16' >
                <div className='text-center my-6'>
                    <h5 className='text-primary text-xl font-bold'>Contact Us</h5>
                    <h2 className='text-3xl text-white'>Stay connected with us</h2>
                </div>
                <div className='flex flex-col w-1/2 mx-auto'>
                    <input type="text" placeholder="Email address" className="input my-2 " />
                    <input type="text" placeholder="Subject" className="input my-2" />
                    <input type="text" placeholder="Your message" className="input input-lg my-2 py-16" />
                    <p className='text-center my-6'><button className='btn btn-primary text-white'>Submit</button></p>

                </div>
            </section >
        </div>
    );
};

export default ContactUs;