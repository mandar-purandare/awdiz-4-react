import { useNavigate } from "react-router-dom";

function Homepage() {

    const router = useNavigate();

    function routerToLogin(){
        router('/login');
    }

    function routerToRegister(){
        router('/register');
    }

    function routerToState(){
        router('/state');
    }

    return (
        <div>
            <h1>Homepage for Awdiz</h1>
            <button onClick={routerToLogin}>Go to Login</button>
            <button onClick={routerToRegister}>Go to Register</button>
            <button onClick={routerToState}>Go to State</button>
        </div>
    )
}

export default Homepage;