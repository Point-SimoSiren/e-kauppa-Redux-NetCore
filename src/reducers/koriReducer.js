const initialState = []

const koriReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD':
            return [...state, action.data]

        default:
            return state
    }
}

//________________________________________

export const addKori = tuote => {
    return async dispatch => {
        dispatch({
            type: 'ADD',
            data: tuote
        })
    }
}

export default koriReducer