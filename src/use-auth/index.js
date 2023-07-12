import React from "react";

const AuthContext = React.createContext(undefined)
export function useAuth(){
    const useAuthContext = React.useContext(AuthContext)
    if(!useAuthContext){
        throw new Error("Not in provider")
    }
    return useAuthContext
}

export function AuthProvider(props){
    const [isAuth, setIsAuth]  = React.useState(false)
    const [goalsList, setGoalsList]  = React.useState([])
    function login(){
        setIsAuth(true)
    }

    function createsGoal(goal){
        setGoalsList(prevState => [...prevState, goal])
    }
    return (
        <AuthContext.Provider value={{isAuth, login, goalsList, createsGoal}}>
            {props.children}
        </AuthContext.Provider>
    )
}