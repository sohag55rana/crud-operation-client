import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import Swal from 'sweetalert2';

const ProductsDetails = () => {
    const { id } = useParams();
    console.log(id, "id");
    const [details, setDetails] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
                console.log(data);
            })
    }, [id])

    const { users } = useAuth() || {}

    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const image = form.image.value
        const item = form.item.value
        const category = form.category.value
        const description = form.description.value
        const price = form.price.value
        const rating = form.rating.value
        const customization = form.customization.value
        const delivery = form.delivery.value
        const quantity = form.quantity.value
        const email = users.email;
        const name = form.name.value
        const foodProducts = { image, item, category, description, price, rating, customization, delivery, quantity, email, name }
        console.log(foodProducts);

        fetch(`http://localhost:5000/updateProduct/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(foodProducts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.modifiedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You Updated a Food Equipment!",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div className="hero bg-base-200 ">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Add Equipment Here!</h1>
                    <p className="py-6">High-quality sports equipment designed for performance, durability, and comfort. Perfect for athletes of all levels to excel.</p>

                </div>
                <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                    <form onSubmit={handleUpdate} className="card-body space-y-10">

                        <div className="md:flex gap-5 justify-around">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl mb-3">Image</span>
                                </label>
                                <input type="text" name="image"
                                    defaultValue={details.image}
                                    placeholder="Image Url"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl mb-3">Item Name</span>
                                </label>
                                <input type="text" name="item"
                                    defaultValue={details.item}
                                    placeholder="Item Name" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="md:flex gap-5 justify-around">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl mb-3">Category Name</span>
                                </label>
                                <input type="text" name="category"
                                    defaultValue={details.category}
                                    placeholder="Category Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl mb-3">Description</span>
                                </label>
                                <input type="text" name="description"
                                    defaultValue={details.description}
                                    placeholder="Description" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="md:flex gap-5 justify-around">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl mb-3">Price</span>
                                </label>
                                <input type="number" name="price"
                                    defaultValue={details.price}
                                    placeholder="Price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl mb-3">Rating</span>
                                </label>
                                <input type="number" name="rating"
                                    defaultValue={details.rating}
                                    placeholder="Rating" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="md:flex gap-5 justify-around">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl mb-3">Customization</span>
                                </label>
                                <input type="text" name="customization"
                                    defaultValue={details.customization}
                                    placeholder="Customization" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl mb-3">Delivery Time</span>
                                </label>
                                <input type="text" name="delivery"
                                    defaultValue={details.delivery}
                                    placeholder="Delivery Time" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="md:flex gap-5 justify-around">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl mb-3">Stock Status Quantity</span>
                                </label>
                                <input type="number" name="quantity"
                                    defaultValue={details.quantity}
                                    placeholder="Stock Status Quantity" className="input input-bordered" required />
                            </div>

                        </div>
                        <div className="md:flex gap-5 justify-around">
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl mb-3">User Email</span>
                                </label>
                                <input type="email" name="email" placeholder="User Email" className="input input-bordered" required />
                            </div> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl mb-3">User Name</span>
                                </label>
                                <input type="text" name="name"
                                    defaultValue={details.name}
                                    placeholder="User Name" className="input input-bordered" required />
                            </div>
                        </div>


                        <div className="form-control mt-6 items-center m-auto ">
                            <button className="btn btn-primary ">Add Equipment</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ProductsDetails;