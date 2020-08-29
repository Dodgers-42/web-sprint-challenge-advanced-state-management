import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS,FETCH_SMURF_FAILURE } from "../actions/smurfActions";



export const initialstate = {
    loading: false,
    errors: '',
    smurf: ''
};

const smurfReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                chuck: action.payload,
                loading: false,
                errors: ''
            };
        case FETCH_SMURF_FAILURE:
            return {
                ...state,
                errors: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default smurfReducer;