import { combineReducers } from 'redux'

import employees from './employeesReducer';
import dateTime from './dateTimeReducer';
import positions from './positionReducer';
import shifts from './shiftsReducer';

export default combineReducers({
    employees,
    dateTime,
    positions,
    shifts
})