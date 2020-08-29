import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const fetchSmurf = () => dispatch => {
    dispatch({ type: FETCH_SMURF_START });
    axios
    .get('')
    .then(res => {
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data.value});
    }).catch(err => dispatch({ type: FETCH_SMURF_FAILURE, payload: err.message }));
}

axios.post('/smurf', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });