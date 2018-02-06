export default function reducer( state={
    dateTime: {},
    currentWeek: 0
  }, action ){

    switch (action.type) {
        case 'FETCH_DATE_TIME': {
            return {
                ...state,
                dateTime: action.payload
            }
        }
        case 'SET_CURRENT_WEEK': {
            return {
                ...state,
                currentWeek: action.payload
            }
        }
    }
    return state
}