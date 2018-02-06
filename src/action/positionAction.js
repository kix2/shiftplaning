import database from '../database'

export function getPositions() {
    return function(dispatch) {
        database.ref('/position').once('value', snap => {
            const response = snap.val()

            
            const empPosition = {};
            response.forEach((position) => {
                empPosition[position.id] = {color: position.color, name: position.name}
            })

            dispatch({ type: 'FETCH_POSITIONS_FULFILLED', payload: empPosition })
        })
    }
}