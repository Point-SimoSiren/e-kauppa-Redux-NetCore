import tuoteService from '../services/tuotteet'

const initialState = []

const tuoteReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INIT':
            return action.data

        case 'CREATE':
            return {
                ...state,
                tuotteet: [action.data, ...state.tuotteet]
            }
        default: return state
    }
}

//------------------ACTION-CREATORS-------------------

export const createAction = submitted => {
    return async dispatch => {
        const uusiTuote = await tuoteService.create(submitted)
        dispatch({
            type: 'CREATE',
            data: uusiTuote
        })
    }
}

export const initTuotteet = () => {
    return async (dispatch) => {
        const data = await tuoteService.getAll()
        dispatch({
            data: data,
            type: 'INIT'
        })
    }
}

export default tuoteReducer