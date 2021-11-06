import React from 'react'
import { Link } from "react-router-dom"
import "./Home.css"
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react"

export default function Home() {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const [welcome, setWelcome] = useState(cookies.user)

    function handleLogout() {
        removeCookie("user")
    }

    return (
        <div className="homeContainer">
            <Link to="/login">
                <button className="formButtonHome" onClick={handleLogout}>
                    Logout
                </button>
            </Link>
            <div className="home">
                <h2> Welcome to your blog {welcome} !</h2>
            </div>
        </div>
    )
}
