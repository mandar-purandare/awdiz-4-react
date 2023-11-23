import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "./Context/GlobalContext";
import { AuthContext } from "./Context/AuthContext";

function Homepage() {

    const router = useNavigate();

    // const {state, dispatch} = useContext(MyContext);
    const {state, Logout} = useContext(AuthContext);

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

    function routerToDynamicStyles(){
        router('/DynamicStyles');
    }

    return (
        <div>
            <h1>Homepage for Awdiz</h1>
            {state?.user?.name? <h2>Welcome, {state?.user?.name} </h2>:<h2></h2>}
            
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
                <button onClick={routerToDynamicStyles}>Dynamic Styles</button>
            </div>
            <div>
                {/* <h2> Global counter: {state.counter}</h2>
                <button onClick={() => dispatch({type:'INCREMENT'})}>+</button>
                <button onClick={() => dispatch({type:'DECREMENT'})}>-</button>
                <button onClick={() =>dispatch({type:'RESET'})}>Reset</button> */}
            </div>
            <div>
                <button onClick={Logout}>Logout</button>
            </div>
        </div>
    )
}

export default Homepage;