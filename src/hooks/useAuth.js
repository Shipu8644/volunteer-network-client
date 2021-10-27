import { useContext } from "react"
import { AuthContext } from "../pages/context/Authprovider"

const useAuth = () => {
    return useContext(AuthContext);
}
export default useAuth;