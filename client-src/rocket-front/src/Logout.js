import React, { useContext, useState } from "react";
import './Logout.css';
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Logout() {
    const [redirect, setRedirect] = useState(false);
    const { clearUser } = useContext(UserContext);

    const HandleLogout = async (event) => {
        event.preventDefault();

        const url = "http://localhost:5000/logout";
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
        <div>
            <button className="logout" onClick={HandleLogout}>Logout</button>
        </div>
    );
}