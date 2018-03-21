import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

import Home from "../Components/Home";
import CreateOpportunity from "../Components/CreateOpportunity";
import EditOpportunity from "../Components/EditOpportunity";
import CreateDemand from "../Components/CreateDemand";
import EditDemand from "../Components/EditDemand";
import Header from "../Components/Header";
import NotFoundPage from "../Components/NotFoundPage";




const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header />
        <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/createOpp" component={CreateOpportunity} />
            <Route path="/editOpp/:id" component={EditOpportunity} />
            <Route path="/createDemand" component={CreateDemand} />
            <Route path="/editDemand/:id" component={EditDemand} />
            <Route component={NotFoundPage} />
        </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;
