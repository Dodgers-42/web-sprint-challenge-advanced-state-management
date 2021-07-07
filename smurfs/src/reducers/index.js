const initialstate = {
    smurfs: [{
        name: '',
        age: '',
        height: ''
        }],
    isFetching: false,
    errors: '',
    addSmurf: false,
    addSmurfError: '',
    smurf: ''
};

export const SMURFS_START = 'SMURFS_START';
export const SMURFS_SUCCESS = 'SMURFS_SUCCESS';
export const SMURFS_FAILURE = 'SMURFS_FAILURE';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';




export const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case SMURFS_START:
            return {
                ...state,
                isFetching: true
            };
        case SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,               
            };
        case SMURFS_FAILURE:
            return {
                ...state,
                errors: null,
                isFetching: false
            };
        case SMURF_SUCCESS:
            return {
                ...state,
                smurf: action.payload
            };
        case ADD_SMURF_START:
            return {
                ...state,
                addSmurf: true
            };
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                addSmurf: false,
                smurfs: action.payload
             };
         case ADD_SMURF_FAILURE:
            return {
                ...state,
                addSmurf: false,
                addSmurfError: null
            };
        default:
            return state;
        
    }   
};

