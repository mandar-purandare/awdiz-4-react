import { useReducer, createContext } from "react";

export const AuthContext = createContext();

function reducer(state,action){
    switch(action.type){
        case "LOGIN":
            return {...state, user: action.payload}
        case "LOGOUT":
            return {...state, user: null}
        default:
            return state;
    }
}

const ParentContext = ({children}) => {
    let itnitialState = {user:null}
    const [state, dispatch] = useReducer(reducer, itnitialState);

    const Login = (data) => {
        dispatch({type:"LOGIN", payload:data});
    }

    const Logout = () => {
        dispatch({type:"LOGOUT"});
    }

    return(
        <AuthContext.Provider value={{state,Login, Logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default ParentContext
