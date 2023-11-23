import { useReducer, createContext, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import api from "../../helpers/AxiosConfig";
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
        localStorage.removeItem("my-token");
        dispatch({type:"LOGOUT"});
        toast.success("Logout successfull");
    }

    useEffect(() => {

        const getCurrentUser = async () => {
            try{
                const response = await api.post('/auth/get-current-user', {token});
                if(response.data.success){
                    Login(response.data.user);
                }
            }catch(error){
                toast.error(error.message);
            }

        }

        const token = JSON.parse(localStorage.getItem("my-token"));
        if(token){
            getCurrentUser();
        }
    },[])

    return(
        <AuthContext.Provider value={{state,Login, Logout}}>
            {children}
            <Toaster/>
        </AuthContext.Provider>
    )
}

export default ParentContext
