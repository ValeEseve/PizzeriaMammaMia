import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null)
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const login = async (email, password) => {
        const url = "http://localhost:5000/api/auth/login"
        const response = await fetch(url, {
            method: "POST", headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            })
        })
        const data = await response.json()
        if (response.ok) {
            setToken(data.token);
            setEmail(data.email);
            localStorage.setItem("token", data.token);
            localStorage.setItem("email", data.email)
            alert("Inicio de sesión exitoso, bienvenid@ de vuelta!")
        } else {
            alert(data?.error || "Error en el inicio de sesión.");
        }
    }

    const register = async (email, password) => {
        const url = "http://localhost:5000/api/auth/register";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();

        if (response.ok) {
            setToken(data.token);
            setEmail(data.email);
            localStorage.setItem("token", data.token);
        } else {
            alert(data?.error || "Error en registro");
        }
    };

    const getProfile = async () => {
    if (!token) {
        console.error("No hay token disponible");
        return;
    }
    
    const url = "http://localhost:5000/api/auth/me";
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    const data = await response.json();

    if (response.ok) {
        console.log("Perfil:", data);
        // opcional: podrías setear email u otros datos si quieres
        setEmail(data.email);
    } else {
        alert(data?.error || "Error al obtener perfil");
    }
};

    const logout = () => {
        setToken(false);
        setEmail("");
        localStorage.removeItem("token")
        localStorage.removeItem("email");
        navigate("/")
    };

    useEffect(() => {
        const storedToken = localStorage.getItem("token")
        const storedEmail = localStorage.getItem("email")
        if (storedToken && storedEmail) {
            setToken(storedToken)
            setEmail(storedEmail)
        }
    }, [])

    return (
        <UserContext.Provider value={{
            token,
            email,
            login,
            register,
            logout,
            getProfile
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider