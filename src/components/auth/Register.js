
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import axios from "axios"

export default function (props) {

    const navigate = useNavigate()

    const [name, setName] = useState()
    const [sport, setSport] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [errorMsg, setErrorMsg] = useState()

    const handleSubmit = e => {
        e.preventDefault()

        axios.post("https://auth-node-mongo.herokuapp.com/api/user/register", { email, name, sport, password })
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    alert('Succesfully registered')
                    navigate('/auth')
                }
            }).catch(err => {
                setErrorMsg(err.response.data)
            })
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Signup</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <span className="link-primary" onClick={() => { navigate("/auth") }}>
                            Sign In
                        </span>
                    </div>
                    {
                        errorMsg && (
                            <div className="text-center">
                                {errorMsg}
                            </div>
                        )
                    }
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Jane Doe"
                            id="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Favourite Sport</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Handball"
                            id="sport"
                            value={sport}
                            onChange={e => setSport(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}