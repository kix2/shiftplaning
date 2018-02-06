import React from 'react';

const TableHead = (props) => {
    if(!props.dateTime.weekDays){
        return <thead></thead>;
    }
    return (
        <thead>
            <tr>
                <th className="text-center">{ props.dateTime.dateRange }</th>
                { props.dateTime.weekDays.map((item)=>{
                     return <th className={"text-center " + (item.isCurrentDay ? "curent-daycolor" : "no-color")} key={item.dayDate}>
                                <div>{ item.dayName }</div>
                                <div>{ item.dayDate }</div>
                            </th>
                }) }
            </tr>
        </thead>
    );
};

export default TableHead;