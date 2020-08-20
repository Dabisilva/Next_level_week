import React from 'react'

import { Route, BrowserRouter } from 'react-router-dom'

import Login from '../pages/Login';


function UnAuthRoutes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
        </BrowserRouter>
    )
}

export default UnAuthRoutes;