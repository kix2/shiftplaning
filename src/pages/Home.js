import React from "react";
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Humanty Shift Planing</h1>
                <Link to='/employeestable'>Employees Table</Link>
            </div>
        );
    }
}