import React, { useContext, useState } from "react";
import '../allStyles/Logout.css';
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Logout() {
    const [redirect, setRedirect] = useState(false);
    const { clearUser } = useContext(UserContext);

    const HandleLogout = async (event) => {
        event.preventDefault();

        const url = "https://resumerocket.onrender.com/logout";
        try {
            const response = await axios.post(url);
            console.log(response.data);
            clearUser();
            setTimeout(() => {
                setRedirect(true);
            }, 3000);
        } catch (error) {
            console.error(error.message);
        }
    }

    if (redirect) {
        return <Navigate to="/login"/>;
    }

    return (
        <div className="text-center">
            <button className="btn btn-secondary lg" onClick={HandleLogout}>Logout</button>
        </div>
    );
}