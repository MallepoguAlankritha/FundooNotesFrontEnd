import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "../Pages/signin/signin";
import SignUp from "../Pages/signup/signup";
import Dashboard from "../Pages/Dashboard/Dashboard";
import React from 'react'

function Router1() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Signin} />
                    <Route path="/SignUp" component={SignUp} />
                    <Route path="/Dashboard" component ={Dashboard} />
                    
                 </Switch>
            </BrowserRouter>
        </>
    )
}

export default Router1;