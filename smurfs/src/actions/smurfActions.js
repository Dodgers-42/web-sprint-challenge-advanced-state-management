import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF = 'ADD_SMURF';

export const fetchSmurfs = () => dispatch => {
    console.log("fetching smurfs")
    dispatch({ type: FETCH_SMURFS_START });
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log("res data", res.data);
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data});
    }).catch(err => dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.message }));
}

export const addSmuft = item => {

    return { type: ADD_SMURF, payload: item }
}

axios.post('http://localhost:3333/smurfs', {
    firstName: 'Papa',
    lastName: 'Smurf'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });