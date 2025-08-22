import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/auth/me", { withCredentials: true });

            setUser(response.data.user);
            setLoading(false);
        } catch (error) {
            setUser(null);
            setLoading(false);
            console.error(error);
        }
    }

    const login = async (userdata) => {
        try {
            const {email , password} = userdata;
            const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                {email , password},
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                }
            );

            if (response.data.message === 'Login successful') {
                return true;
            }
            return false;
        } catch (error) {
            setUser(null);
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, login }}>
            {children}
        </AuthContext.Provider>
    )
};