
import Swal from "sweetalert2";
import useAuth from "../auth/useAuth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const MyProducts = () => {

    const { users } = useAuth() || {};
    const [items, setItems] = useState([])
    const [control, setControl] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:5000/myProducts/${users?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data)
            })
    }, [users, control])

    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your file has been deleted.",
                                "success"
                            );
                            setControl(!control)
                            // const remaining = allCoffee.filter(cof => cof._id !== _id)
                            // setAllCoffee(remaining)

                        }
                    })

            }
        });
    }

    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>*</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        items.map((item, index) => <tr key={item._id}>
                            <th>{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.image}</td>
                            <td>{item.email}</td>
                            <td><Link to={`/myProducts/${item._id}`}><button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update</button></Link></td>
                            <td><button onClick={() => handleDelete(item._id)} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;