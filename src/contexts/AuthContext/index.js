import React, {createContext, useState} from "react";

const AuthContext = createContext();

function AuthProvider({children}) {
    const [user , setUser] = useState({}); 


    return (
        <AuthContext.Provider >
            {children}
        </AuthContext.Provider>
    )
}