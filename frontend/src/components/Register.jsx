import { useNavigate } from "react-router-dom";

const Register = () => {

    const router = useNavigate();

    function routerToHomepage(){
        router('/')
    }

    return(
        <div>
            <h2>Register</h2>
            <button onClick={routerToHomepage}>Back to Homepage</button>
        </div>
    )
}

export default Register;