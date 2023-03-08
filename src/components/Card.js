import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function (props) {

    const { state } = useLocation();
    const navigate = useNavigate();

    return (
        <div class="box">
            <div class="container col d-flex justify-content-center">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div class="box-part text-center">
                        <div class="title">
                            <h4>Welcome {state.name}</h4>
                        </div>
                        <div class="text">
                            <span>Email: {state.email}</span>
                        </div>
                        <div class="text">
                            <span>Favourite sport: {state.sport}</span>
                        </div>
                        <div class="text">
                            <button type="button" class="btn btn-danger" onClick={() => { navigate("/auth") }}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}