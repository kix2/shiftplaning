import React from 'react';
import Shift from '../Shift/ShiftComponent'

const TableBody = ({ dateTime, positions, shifts, employees, filter }) => {

    if(!dateTime.weekDays){
        return <tbody></tbody>;
    }

    let employeesList = employees; 
    if(filter.length){
        employeesList = employees.filter((employee)=>{
            let fullName = `${employee.firstName} ${employee.lastname}`;
            return fullName.toLowerCase().indexOf(filter) !== -1;
        });
    }

    return (
        <tbody>
            { employeesList.map((employee, index) => {
            return  <tr key={index}>
                        <td>
                            <img className="avatar" src={employee.avatar} />
                            <div>{employee.firstName} {employee.lastname}</div>
                        </td>
                        { dateTime.weekDays.map((day, key) => {
                            if(shifts[employee.employee_id]){
                                return (<td key={key} className={(day.isCurrentDay ? 'curent-daycolor' : 'no-color')}>
                                            <Shift data={{ day: day, position : positions[employee.position], empShift: shifts[employee.employee_id] }}/> 
                                        </td>)
                        }
                        return <td key={key} className={(day.isCurrentDay ? 'curent-daycolor' : 'no-color')}></td>
                    })}
                    </tr>;
            })}
        </tbody>
    );
};

export default TableBody;