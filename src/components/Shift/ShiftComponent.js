import React from 'react';

const Shift = (props) => {

    let shiftTime  = props.data.empShift.find((item)=>{
        return item.date == props.data.day.dayDate;
    });

    let divStyle = {
        background: props.data.position.color,
        color: '#fff',
        padding: '55px 10px',
        textAlign: 'center'
    };

    return (
        <div>
            <div> { shiftTime !== undefined && shiftTime.time !== undefined && 
                <div className="shift-time" style={divStyle}> 
                    { shiftTime.time }
                    <div>{ props.data.position.name}</div>
                </div> } 
            </div>
        </div>
    );
};

export default Shift;