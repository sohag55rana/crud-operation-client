import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const useAuth = () => {
    const all = useContext(AuthContext)
    return all
};

export default useAuth;