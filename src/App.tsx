import React, {useEffect, useState} from "react";
import s from './App.module.css'
import {Restaurant} from "./Components/Restaurant/Restaurant";
import {Outlet} from "react-router-dom";
import {Provider} from "react-redux";
import { createStore } from "redux";
import {rootReducer} from "./redux/rootReducer";

function App() {
    const store = createStore(rootReducer)
    return (
        <div className={s.App}>
            <Provider store={store}>
                <Outlet/>
            </Provider>

        </div>
    )
}

export default App
