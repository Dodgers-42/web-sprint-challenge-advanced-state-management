import React, { useState } from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

const Form = props => {
    const [form, setForm] = useState ({
        name: "",
        age: "",
        height: ""
    });

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const submit = e =>{ 
        e.preventDefault();
        props.addSmurf(form);
    }

    return (
    <form onSubmit={submit}>
        <p>Name your Smurf</p>
        <div className="form-input">
            <input type='text' name='name' lable='name' placeholder='name' onChange={handleChange} value={form.name} />
            <input type='number' name='age' lable='age' placeholder='age' onChange={handleChange} value={form.age} />
            <input type='number' name='height' lable='height' placeholder='height' onChange={handleChange} value={form.height} />
        </div>  
            <button> Add Smurf </button>
            {props.addSmurf && <p>Adding a smurf...</p>}
    </form>

    )

}

const mapStateToProps = state => {
    return {
        addSmurf: state.addSmurf,
    }
}

const mapDispatchToProps = {addSmurf};

export default connect(mapStateToProps, mapDispatchToProps)(Form);