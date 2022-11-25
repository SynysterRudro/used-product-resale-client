import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const AddProduct = () => {

    //     category_id:"637e8fa54defb1a01a13f011"
    // category_name:"IOS"
    // img:"https://i.ibb.co/PGWqMnJ/iphone.jpg"
    // product_name:"iphone 13"
    // location:"Sylhet"
    // original_price:"100000"
    // yearsUsed:"1year"
    // date:"24 november 2022"
    // seller_name:"Rudro"
    // isVerified:"false"
    // resale_price:"60000"
    const { user } = useContext(AuthContext);
    const imageHostKey = process.env.REACT_APP_imagebb_key;

    const navigate = useNavigate();


    const { register, handleSubmit, formState: { errors } } = useForm();


    // user to database 
    const saveProduct = (product_name, img, location, original_price, resale_price, yearsUsed, seller_name, email, condition, mobile_number, description,) => {
        const product = { product_name, img, location, original_price, resale_price, yearsUsed, seller_name, email, condition, mobile_number, description };
        fetch('https://used-products-resale-server-two.vercel.app/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {

            })
    }

    const handleFormSubmit = (data) => {

        const image = data.img[0];


        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);

                    saveProduct(data.product_name, imgData.data.url, data.location, data.b_price, data.s_price, data.year, user?.displayName, user?.email, data.condition, data.phone, data.description);
                    alert('product added');
                    navigate('/myproduct');

                }
            })

    }
    return (
        <div>

            <form onSubmit={handleSubmit(handleFormSubmit)}>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product name</span>
                    </label>
                    <input type="text" {...register("product_name", { required: 'name is required' })} className="input input-bordered w-full " />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">User photo</span>
                    </label>
                    <input type="file" {...register("img", { required: 'Image is required' })} className="file-input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Buying Price</span>
                    </label>
                    <input type="text" {...register("b_price", { required: 'price is required' })} className="input input-bordered w-full " />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Selling Price</span>
                    </label>
                    <input type="text" {...register("s_price", { required: 'price is required' })} className="input input-bordered w-full " />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Condition</span>
                    </label>
                    <select className="select select-bordered mt-6 w-full max-w-xs " {...register("condition", { required: 'condition is required' })}>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input type="text" {...register("phone", { required: 'number is required' })} className="input input-bordered w-full " />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" {...register("location", { required: 'location is required' })} className="input input-bordered w-full " />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" {...register("description", { required: 'Description is required' })} className="input input-bordered w-full " />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Purchase year</span>
                    </label>
                    <input type="text" {...register("year", { required: 'purchase year is required' })} className="input input-bordered w-full " />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                </div>


                <input type="submit" className='btn btn-primary  mt-4' value='Add product' />
                {/* {signupError && <p className='text-red-600'>{signupError}</p>} */}
            </form>


        </div>
    );
};

export default AddProduct;