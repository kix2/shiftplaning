export default function reducer( state={
    shifts: []
  }, action ){

    switch (action.type) {
        case 'FETCH_SHIFTS_FULFILLED': {
            return {
                ...state,
                shifts: action.payload
            }
        }
    }
    return state
}