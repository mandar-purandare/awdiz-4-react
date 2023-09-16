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

    function routerToParams(){
        router('/params');
    }

    function routerToEffect3(){
        router('/Effect3');
    }

    function routerToEffect4(){
        router('/Effect4');
    }

    function routerToMsgCounter(){
        router('/MessagingCounter');
    }

    function routerToMappingProps(){
        router('/MappingProps');
    }

    function routerToStyledComponents(){
        router('/StyledComponents');
    }

    function routerToTernary(){
        router('/Ternary');
    }

    return (
        <div>
            <h1>Homepage for Awdiz</h1>
            <div>
                <button onClick={routerToLogin}>Go to Login</button>
                <button onClick={routerToRegister}>Go to Register</button>
                <button onClick={routerToState}>Go to State</button>
                <button onClick={routerToParams}>Go to Params</button>
                <button onClick={routerToEffect3}>Effect3</button>
                <button onClick={routerToEffect4}>Effect4</button>
            </div>
            <div>
                <button onClick={routerToMsgCounter}>Messaging Counter</button>
                <button onClick={routerToMappingProps}>Names Using Map & Props</button>
                <button onClick={routerToStyledComponents}>Styled Components</button>
                <button onClick={routerToTernary}>Ternary For Login</button>
            </div>
        </div>
    )
}

export default Homepage;