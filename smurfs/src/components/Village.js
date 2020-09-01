import React from 'react';
import { connect }  from 'react-redux';

import NewSmurfForm from './NewSmurfForm';

    const Village = props => {
        return (
            <div>
                <h2>Smurf Village Populaiton:</h2>
                {props.smurfs.map(item =>(
                    console.log("item=", item),
                    <NewSmurfForm smurf={item}/>
                ))}

            </div>
        );
    };

    const mapStateToProps = state => {
        return {
            smurfs: state.smurfs
        }
    }

    const mapDispatchToProps = {};

    export default connect(mapStateToProps, mapDispatchToProps)(Village);
    
