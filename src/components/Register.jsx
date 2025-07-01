import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z0-9@$!%*?&]{6,}$/;
    const navigate = useNavigate()


    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log('all ok', name, photo, email, password)
        if (!regexPassword.test(password)) {
            alert('Password At least 6 Caracters long, 1 uppercase, 1 lowercase')
            return;
        }


        createUser(email, password)
            .then(result => {
                console.log(result.user)

                const createdAt = result?.user?.metadata?.creationTime

                const newUsers = { name, email, createdAt }

                axios.post('http://localhost:5000/single', newUsers)
                    .then(data => {
                        console.log(data.data)
                    })

                // fetch('http://localhost:5000/single', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(newUsers)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data)
                //     })

                toast.success('Account created Successfully')
                form.reset()


            })
            .catch(error => {
                console.error(error);
            })

    }

    return (
        <div className="hero bg-base-200 ">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">High-quality sports equipment designed for performance, durability, and comfort. Perfect for athletes of all levels to excel.</p>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>

                    </form>
                    <ToastContainer autoClose={1000} />
                </div>
                <p>Already have account? <button className="btn btn-neutral" onClick={() => navigate('/login')}>Login</button> here</p>

            </div>
        </div>
    );
};

export default Register;