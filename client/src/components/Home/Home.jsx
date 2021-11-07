import React from 'react'
import { Link } from "react-router-dom"
import "./Home.css"
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react"
import axios from "axios";

export default function Home() {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const [welcome, setWelcome] = useState(cookies.user)
    const [tickets, setTickets] = useState([])
    const [error, setError] = useState("")



    function handleLogout() {
        removeCookie("user")
    }

    useEffect(() => {
        axios.get("http://localhost:4242/tickets")
            .then(res => setTickets(res.data))
            .catch(err => setError("Error when fetching tickets"))
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

            const data = { login, email, password };

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
                body: JSON.stringify(data)
            }

            fetch("http://localhost:4242/register", requestOptions)
                .then(response => response.json())
                .then(res => setError(res))
        }
    };

    return (
        <div className="homeContainer">
            <Link to="/login">
                <button className="formButtonHome" onClick={handleLogout}>
                    Logout
                </button>
            </Link>
            <Link to="/">
                <button className="formButtonHome">
                    Home
                </button>
            </Link>
            <div className="home">
                <h2> Welcome to your blog {welcome} !</h2>
                <p>{error}</p>
            </div>
            <div className="tickets">
                <h3> Your last tickets: </h3>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <input placeholder="title" />
                        <button className="btn btn-add btn-success" onClick={handleSubmit}>Add</button>
                    </li>
                    <li class="list-group-item body">
                        <input placeholder="body" />
                    </li>
                    <br />
                    {tickets.map((ticket) => {
                        if (cookies.user == ticket.id_user) {
                            return (
                                <>
                                    <li class="list-group-item">
                                        <u>{ticket.title}</u>
                                        <i class="far fa-trash-alt"></i>
                                        <i class="far fa-edit"></i>
                                    </li>
                                    <li class="list-group-item body">
                                        {ticket.body}
                                    </li>
                                    <br />
                                </>
                            )
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}
