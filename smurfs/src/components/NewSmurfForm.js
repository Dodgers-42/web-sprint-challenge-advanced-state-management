import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react';


export default () => {
    const sendNewSmurf = useDispatch();
    const usedId = useSelector(state => state.lastAddedSmurfId);
    const [name,setName] = useState('');
    const [age, setAge] = useState(0);
    const [height, setHeight] = useState(0);

    const handleChange = e => {
        if (e.target.name === 'name') {
            setName(e.target.value);
        } else if (e.target.name === 'age') {
            setAge(e.target.value);
        } else {
            setHeight(e.target.value);
        }
    }

    // const addNewSmurf = e => {
    //     e.preventDefault();
    //     let smurfObject = {
    //         name: name,
    //         age: age,
    //         height: height + 'cm',
    //         id: usedId + 1

    //     }
    //     return sendNewSmurf(sendData(smurfObject));
    // }

    return (
        <div>
            <input type='type' name='name' onClick={handleChange} value={name} />
            <input type='number' name='age' onClick={handleChange} value={age} />
            <input type='number' name='height' onClick={handleChange} value={height} />
            {/* <button onClick={addNewSmurf} > Add Smurf </button> */}
        </div>

    );
}