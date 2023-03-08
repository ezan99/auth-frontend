
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import axios from "axios"

export default function (props) {
    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [errorMsg, setErrorMsg] = useState()

    const handleSubmit = e => {
        // Prevent the default submit and page reload
        e.preventDefault()

        // Making request
        axios.post("https://auth-node-mongo.herokuapp.com/api/user/login", { email, password })
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    navigate('/dashboard', { state: response.data })
                }
            })
            // Error handling
            .catch(err => {
                setErrorMsg(err.response.data)
            }
            )
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Log In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
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
                            placeholder="Enter password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    {errorMsg && (errorMsg)}
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Log In
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
