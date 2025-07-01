import Swal from "sweetalert2";
import useAuth from "../auth/useAuth";


const AddProducts = () => {

    const { users } = useAuth() || {}

    const handleAddEquipment = e => {
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

        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(foodProducts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You Added a Food Equipment!",
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
                    <form onSubmit={handleAddEquipment} className="card-body space-y-10">

                        <div className="md:flex gap-5 justify-around">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl mb-3">Image</span>
                                </label>
                                <input type="text" name="image" placeholder="Image Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl mb-3">Item Name</span>
                                </label>
                                <input type="text" name="item" placeholder="Item Name" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="md:flex gap-5 justify-around">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl mb-3">Category Name</span>
                                </label>
                                <input type="text" name="category" placeholder="Category Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl mb-3">Description</span>
                                </label>
                                <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="md:flex gap-5 justify-around">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl mb-3">Price</span>
                                </label>
                                <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl mb-3">Rating</span>
                                </label>
                                <input type="number" name="rating" placeholder="Rating" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="md:flex gap-5 justify-around">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl mb-3">Customization</span>
                                </label>
                                <input type="text" name="customization" placeholder="Customization" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl mb-3">Delivery Time</span>
                                </label>
                                <input type="text" name="delivery" placeholder="Delivery Time" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="md:flex gap-5 justify-around">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-xl mb-3">Stock Status Quantity</span>
                                </label>
                                <input type="number" name="quantity" placeholder="Stock Status Quantity" className="input input-bordered" required />
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
                                <input type="text" name="name" placeholder="User Name" className="input input-bordered" required />
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

export default AddProducts;