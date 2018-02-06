import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { HashRouter as Router} from 'react-router-dom'
import { Switch, Route } from 'react-router'

import store from "./store"

import { Home, EmployeesTable } from './pages'

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/employeestable' component={EmployeesTable} />
        </Switch>
    </Router>
</Provider>, app);