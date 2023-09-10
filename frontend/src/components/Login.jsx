import { useNavigate } from "react-router-dom";

const Login = () => {

    const router = useNavigate();

    function routerToHomepage(){
        router('/')
    }

    return(
        <div>
            <h2>Login</h2>
            <button onClick={routerToHomepage}>Back to Homepage</button>
        </div>
        
    )
}

export default Login;