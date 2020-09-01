// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react';
// import { connect } from 'react-redux';


// export default () => {
//     const sendNewSmurf = useDispatch();
//     const usedId = useSelector(state => state.lastAddedSmurfId);
//     const [name,setName] = useState('');
//     const [age, setAge] = useState(0);
//     const [height, setHeight] = useState(0);

//     const handleChange = e => {
//         if (e.target.name === 'name') {
//             setName(e.target.value);
//         } else if (e.target.name === 'age') {
//             setAge(e.target.value);
//         } else {
//             setHeight(e.target.value);
//         }
//     }
// //import post function
//     const addNewSmurf = e => {
//         e.preventDefault();
//         let smurfObject = {
//             name: name,
//             age: age,
//             height: height + 'cm',
//             id: usedId + 1

//         }
//         return sendNewSmurf(sendData(smurfObject));
//     }

//     return (
//         <div>
//             <input type='type' name='name' onClick={handleChange} value={name} />
//             <input type='number' name='age' onClick={handleChange} value={age} />
//             <input type='number' name='height' onClick={handleChange} value={height} />
//             <button onClick={addNewSmurf} > Add Smurf </button>
//         </div>

//     );
// }

// const mapDispatchToProps = {
//     addSmurf
// }

// export default connect(null, mapDispatchToProps)(NewSmurfForm);


// new look...

import React, { useState } from 'react';
import { createSmurf } from '../actions';
import { connect } from 'react-redux';

const SmurfForm = props => {
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
        props.createSmurf(form);
    }

    return (
        <form onSubmit={submit}>
        <p>Name your own Smurf</p>
        <div className="form-input">
            <input type='text' name='name' lable='name' placeholder='name' onClick={handleChange} value={form.name} />
            <input type='number' name='age' lable='age' placeholder='age' onClick={handleChange} value={form.age} />
            <input type='number' name='height' lable='height' placeholder='height' onClick={handleChange} value={form.height} />
        </div>  
            <button> Add Smurf </button>
            {props.createSmurf && <p>Creating smurf...</p>}
        </form>

    )

}

const mapStateToProps = state => {
    return {
        createSmurf: state.createSmurf,
    }
}

const mapDispatchToProps = {createSmurf};

export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm);