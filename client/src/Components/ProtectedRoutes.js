import { Outlet,Navigate} from "react-router-dom";
import { useCookies} from "react-cookie";



const useAuth = () => {
    const [cookies, setCookie] = useCookies(['user'])
    let changetoken = cookies.user;
    if(changetoken === false) {
        const user = { loggedIn : false};
        return user && user.loggedIn;


    }
    else {

        const user = { loggedIn : true};
        return user && user.loggedIn;

    }
}

const ProtectedRoutes = () => {

    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/" />;
}


export default ProtectedRoutes;