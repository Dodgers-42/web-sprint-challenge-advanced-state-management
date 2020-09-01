import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS,FETCH_SMURFS_FAILURE, ADD_SMURF } from "../actions/smurfActions";



export const initialstate = {
    loading: false,
    errors: '',
    smurf: []
};

export const FETCHING_SMURFS_START = 'FETCHING_SMURF_START';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURF_FAILURE';



const smurfReducer = (state = initialstate, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: [...state.smurf, action.payload],
                loading: false,
                errors: ''
            };
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                errors: action.payload,
                loading: false
            };
        case ADD_SMURF:
            return {
                ...state,
                smurfs: [...state.smurf, action.payload]
            };

    };
        
}   


export default smurfReducer;