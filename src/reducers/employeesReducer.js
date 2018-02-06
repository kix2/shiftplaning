export default function reducer( state={
    employees: [],
    filterEmployees: ''
  }, action ){

    switch (action.type) {
        case 'FETCH_EMPLOYEES_FULFILLED': {

            return {
                ...state,
                employees: action.payload
            }
        }
        case 'SET_FILTER_EMPLOYEES': {
            return {
                ...state,
                filterEmployees: action.payload
            }
        }
    }
    return state
}