import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TableHead, TableBody, Navigation, FilterEmployee } from '../components';

import { getEmployees, setFilterEmployees } from '../action/employeesAction';
import { getWeek, setCurrentWeek } from '../action/dateTimeAction';
import { getPositions } from '../action/positionAction';
import { getShifts } from '../action/shiftsAction';

class Layout extends Component {

    componentWillMount() {
        this.props.dispatch(getEmployees());
        this.props.dispatch(getWeek(this.props.currentWeek));
        this.props.dispatch(getPositions());
        this.props.dispatch(getShifts());
    }

    changeWeek = (number) => {
        let newWeek = parseInt(this.props.currentWeek, 10) + parseInt(number, 10);

        this.props.dispatch(setCurrentWeek(newWeek));
        this.props.dispatch(getWeek(newWeek));
    }

    getFilteredEmployees = (e) => {
        this.props.dispatch(setFilterEmployees(e.target.value.toLowerCase()));
    }

    render(){
        const  { dateTime, positions, shifts, employees, filterEmployees } = this.props;

        return (
            <div className="table">
                <FilterEmployee getFilteredEmployees={this.getFilteredEmployees}/>
                <table className="table table-hover">
                    <TableHead dateTime={dateTime}/>
                    <TableBody dateTime={ dateTime } positions={positions} shifts={shifts} employees={employees} filter={filterEmployees}/>
                </table>
                <Navigation onChangeWeek={number => this.changeWeek(number)}/>
            </div>
        );
    }
}

const mapStateToProps = ({
    employees:{ employees, filterEmployees },
    dateTime: { dateTime, currentWeek },
    positions: { positions },
    shifts: { shifts }
}) => {
return {
        employees,
        filterEmployees,
        dateTime,
        currentWeek,
        positions,
        shifts
    };
};

export default connect(mapStateToProps)(Layout);