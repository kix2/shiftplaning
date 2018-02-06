import database from '../database'

export function getEmployees() {
    return function(dispatch) {
        database.ref('/employees').once('value', snap => {
            const response = snap.val()

            dispatch({ type: 'FETCH_EMPLOYEES_FULFILLED', payload: response })
        })
    }
}

export function setFilterEmployees(filter) {
    return function(dispatch) {
        dispatch({ type: 'SET_FILTER_EMPLOYEES', payload: filter })
    }
}