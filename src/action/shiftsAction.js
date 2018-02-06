import database from '../database'

export function getShifts() {
    return function(dispatch) {
        database.ref('/shifts').once('value', snap => {
            const response = snap.val()

            const empShift = {};
            response.forEach((shift) => {
                shift.employees.forEach((index)=>{
                    if(!empShift[index.employe_id]){
                        empShift[index.employe_id] = [];
                    }
                    empShift[index.employe_id].push({date: shift.timeDate.date, time: shift.timeDate.time})
                })
            })

            dispatch({ type: 'FETCH_SHIFTS_FULFILLED', payload: empShift })
        })
    }
}