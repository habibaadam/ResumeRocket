import React from "react";
import './Logout.css';
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Logout() {
    const HandleLogout = async (event) => {
        event.preventDefault();

        const url = "http://localhost:5000/logout";
        try {
            await axios.post(url)
            .then((response) => {
                console.log(response.data);

                setTimeout(() => {
                    Navigate('/login')
                }, 3000);
            });
        } catch (error) {
            console.error(error.message);
        }
    }
    return (
        <div>
        <button className="logout" onClick={HandleLogout}>Logout</button>
        </div>
    );
}