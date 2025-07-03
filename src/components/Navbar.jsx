import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";


const Navbar = () => {
    const { users, signOutUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignout = e => {
        e.preventDefault()

        signOutUser().
            then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                console.error(error);

                // An error happened.
            });

    }

    const navlinks = <>
        <li className="font-bold"><NavLink to="/">Home</NavLink></li>
        {/* <li className="font-bold"><NavLink to="/equipment">All Equipment</NavLink></li> */}
        {/* <li className="font-bold"><NavLink to="/contact">Contact Us</NavLink></li> */}
        <li className="font-bold"><NavLink to="/addProduct">Add Product</NavLink></li>
        <li className="font-bold"><NavLink to="/myProducts">myProducts</NavLink></li>
        {/* <li className="font-bold"><NavLink to="/productsDetails">Details</NavLink></li> */}
        {/* <li className="font-bold"><NavLink to="/myequipment">My Equipment</NavLink></li> */}
        <li className="font-bold"><NavLink to="/login">Login</NavLink></li>
        <li className="font-bold"><NavLink to="/register">Register</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"> </a>
                <h2 className="text-3xl text-center font-bold"><span className="text-green-800">BD</span> <br /> Sports Equipment</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    users ? <><span>{users.email}</span> <button onClick={handleSignout} className="btn btn-primary">sign out</button></> : <button onClick={() => navigate('/login')} className="btn btn-primary">Login</button>
                }
            </div>
        </div>
    );
};

export default Navbar;