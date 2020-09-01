// import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS,FETCH_SMURFS_FAILURE, ADD_SMURF } from "../actions/smurfActions";



// export const initialstate = {
//     loading: false,
//     errors: '',
//     smurf: []
// };

// export const FETCHING_SMURFS_START = 'FETCHING_SMURF_START';
// export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURF_SUCCESS';
// export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURF_FAILURE';



// const smurfReducer = (state = initialstate, action) => {
//     switch (action.type) {
//         case FETCH_SMURFS_START:
//             return {
//                 ...state,
//                 loading: true
//             };
//         case FETCH_SMURFS_SUCCESS:
//             return {
//                 ...state,
//                 smurfs: [...state.smurf, action.payload],
//                 loading: false,
//                 errors: ''
//             };
//         case FETCH_SMURFS_FAILURE:
//             return {
//                 ...state,
//                 errors: action.payload,
//                 loading: false
//             };
//         case ADD_SMURF:
//             return {
//                 ...state,
//                 smurfs: [...state.smurf, action.payload]
//             };

//     };
        
// }   


// export default smurfReducer;


// new look

const initialstate = {
    smurfs: [{
        name: '',
        age: '',
        height: ''
        }],
    isFetching: false,
    errors: '',
    createSmurf: false,
    createSmurfError: '',
    smurf: ''
};

export const SMURFS_START = 'SMURFS_START';
export const SMURFS_SUCCESS = 'SMURFS_SUCCESS';
export const SMURFS_FAILURE = 'SMURFS_FAILURE';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const CREATE_SMURF_START = 'CREATE_SMURF_START';
export const CREATE_SMURF_SUCCESS = 'CREATE_SMURF_SUCCESS';
export const CREATE_SMURF_FAILURE = 'CREATE_SMURF_FAILURE';




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
        case SMURFS_SUCCESS:
            return {
                ...state,
                smurf: action.payload
            };
        case CREATE_SMURF_START:
            return {
                ...state,
                createSmurf: true
            };
        case CREATE_SMURF_SUCCESS:
            return {
                ...state,
                createSmurf: false,
                smurfs: action.payload
             };
         case CREATE_SMURF_FAILURE:
            return {
                ...state,
                createSmurf: false,
                createSmurfError: null
            };
        default:
            return state;
        
    }   
};

