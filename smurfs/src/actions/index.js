// import axios from 'axios';

// export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
// export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
// export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

// export const ADD_SMURF = 'ADD_SMURF';
// // export const ADD_SMURF = 'ADD_SMURF';
// // export const ADD_SMURF = 'ADD_SMURF';

// export const fetchSmurfs = () => dispatch => {
//     console.log("fetching smurfs")
//     dispatch({ type: FETCH_SMURFS_START });
//     axios
//     .get('http://localhost:3333/smurfs')
//     .then(res => {
//         console.log("res data", res.data);
//         dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data});
//     }).catch(err => dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.message }));
// }

// export const addSmuft = item => {

//     return { type: ADD_SMURF, payload: item }
// }

// axios.post('http://localhost:3333/smurfs', {
//     firstName: 'Papa',
//     lastName: 'Smurf'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


// new look


  import {
    SMURFS_START,   
    SMURFS_SUCCESS,
    SMURFS_FAILURE,
    SMURF_SUCCESS,
    CREATE_SMURF_START,
    CREATE_SMURF_SUCCESS,
    CREATE_SMURF_FAILURE,
} from '../reducers';

import axios from 'axios';

export const getSmurfs = () => dispatch =>{
    dispatch({type: SMURFS_START});
        axios
        .get("http://localhost:3333/smurfs")
        .then((res) => {
            dispatch({
                type: SMURFS_SUCCESS, 
                payload: res.data
            })
            console.log(res)})
        .catch((err) => {
            dispatch({
                type: SMURFS_FAILURE
            })
            console.log(err)
    });
};

export const createSmurf = smurf => dispatch =>{
  dispatch({type: CREATE_SMURF_START});
      axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((res) => {
          dispatch({
              type: CREATE_SMURF_SUCCESS,
              payload: res.data
          })
          console.log(res)
      })
      .catch((err) => {
          dispatch({
              type: CREATE_SMURF_FAILURE
          })
          console.log(err)
  });
};

export const getSmurf = id => dispatch =>{
  axios
  .get(`http://localhost:3333/smurfs/${id}`)
  .then((res)=>{
      dispatch({
          type: SMURF_SUCCESS, 
          payload: res.data
      })
      console.log(res)
  })
  .catch((err) => {
      dispatch({
          type: SMURFS_FAILURE
      })
      console.log(err)
  });
};