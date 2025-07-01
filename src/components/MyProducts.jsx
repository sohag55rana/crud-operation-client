
import Swal from "sweetalert2";
import useAuth from "../auth/useAuth";
import { useEffect, useState } from "react";


const MyProducts = () => {

    const { users } = useAuth() || {};
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myProducts/${users?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data)
            })
    }, [users])

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
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;