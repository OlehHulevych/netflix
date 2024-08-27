import axios from 'axios';
import {useState, useEffect, useContext, createContext} from "react";


const AuthContext = createContext();

const AuthProvider = ({children})=>{
    return <AuthContext.Provider>{children}</AuthContext.Provider>
}

export default AuthProvider;

export const useAuth=()=>{
    return useContext(AuthContext)
}