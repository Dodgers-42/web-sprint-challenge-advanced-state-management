import React, { } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { getSmurfs } from '../actions';

import Village from './Village';
import Smurf from './Smurf';
import Form from './Form'

const App = (props) => {
  return (
    <div className="App">
      <h1>SMURFS!</h1>
      <Form />
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