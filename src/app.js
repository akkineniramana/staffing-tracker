import React, { Component } from 'react';   
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import {Provider} from 'react-redux';
import AppRouter from './Routers/AppRouter';
import configureStore from './store/configureStore'
import {createOpp} from './actions/opportunity'
import 'normalize.css/normalize.css';
import '../styles/style.scss';

const store = configureStore();
console.log(store.getState());
store.dispatch(
  createOpp({
    opp: {
      name: "Big Data Requirements",
      type: "New",
      status: "Active"
    },
    domain: "Dev",
    startDate: "01/25/2018",
    infyManager: "Test Manager1",
    sponsor: "test1@gap.com",
  })
);

// console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById("app"))
