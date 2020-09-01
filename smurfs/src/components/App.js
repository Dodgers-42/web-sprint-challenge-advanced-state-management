// import React, { Component } from "react";
// import NewSmurfForm from './NewSmurfForm';
// import Village from './Village';
// import "./App.css";
// import { connect } from "react-redux";
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>SMURFS! W/Redux</h1>
//         <div>Welcome to your state management version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div>
//         <NewSmurfForm />
//         <Village />
//       </div>
//     );
//   }
// }

// export default App;

// new look

import React, { } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { getSmurfs } from '../actions';

import Village from './Village';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm'

const App = (props) => {
  return (
    <div className="App">
      <h1>SMURFS!</h1>
      <SmurfForm />
      <Route exact path="/smurf/:id">
        <Village />
      </Route>
      {props.smurfs.map(smurf => {
                return <Smurf key={smurf.id} smurf={smurf}/>})}
    </div>
  );
}


const mapStateToProps = (state) =>{
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  }
}

const mapDispatchToProps = {getSmurfs};

export default connect(mapStateToProps, mapDispatchToProps)(App);