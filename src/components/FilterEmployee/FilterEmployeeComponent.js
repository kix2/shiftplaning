import React from 'react';

const FilterEmployee = (props) => {
    return (
        <div className='form-group'>
            <input type='text' className='form-control' placeholder="Filter Employees" onChange={props.getFilteredEmployees}/>
        </div>
    );
};

export default FilterEmployee;