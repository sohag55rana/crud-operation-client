import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../auth/AuthProvider";

const Login = () => {

    const { signInUser, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoogle = e => {
        e.preventDefault()
        googleSignIn()
            .then(result => {
                console.log(result.user)
                console.log('login success')
                toast.success('Login Successfully');
            })
            .catch(error => {
                console.error(error);
                alert(error.message)

            })

    }

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log('all ok', email, password)
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                console.log('login success')
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loggedUser = { email, lastSignInTime }

                fetch(`http://localhost:5000/single/${email}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })

                toast.success('Login Successfully');

                form.reset()
            })
            .catch(error => {
                console.error(error);
                alert(error.message)

            })

    }
    return (
        <div className="hero bg-base-200 ">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">High-quality sports equipment designed for performance, durability, and comfort. Perfect for athletes of all levels to excel.</p>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">

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
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="mx-auto ">
                            <p className="text-center ml-5"> <button onClick={handleGoogle} className="btn bg-amber-500"><FaGoogle ></FaGoogle></button> Login with Google</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <ToastContainer autoClose={1000} />
                </div>
                <p>No have account? <button className="btn btn-neutral" onClick={() => navigate('/register')}>Register</button> Now</p>
            </div>
        </div>
    );
};

export default Login;