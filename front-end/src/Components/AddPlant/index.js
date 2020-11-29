import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormContainer, AddPlantForm } from './style/addplant';
import axios from 'axios';

export default function AddPlant() {
    const [plant, setPlant] = useState([]);

    const history = useHistory();

    const formSubmit = e => {
    e.preventDefault();
    
    axios
        .post("https://water-my-plants-2020.herokuapp.com/plants", plant)
        .then((res) => {
            localStorage.setItem("Add Plant Response: ", res.data.token);
            history.replace("/plants");
        })
        .catch((err) => {
            console.log("Add Plant Error: ", err.message);
        });
    };

    return (
        <FormContainer onSubmit={ formSubmit }>
            <AddPlantForm>
                <input
                    style={{ margin: '5px'}}
                    type='text'
                    placeholder='Image Url'
                    id='imageUrl'
                    name='imageUrl'
                    onChange={ e =>setPlant(e.target.value) }
                /><br />
                <input
                    style={{ margin: '5px'}}
                    type='text'
                    placeholder='Nick Name'
                    id='nickname'
                    name='nickname'
                    onChange={ e =>setPlant(e.target.value) }
                /><br />
                <input
                    style={{ margin: '5px'}}
                    type='text'
                    placeholder='Species'
                    id='species'
                    name='species'
                    onChange={ e =>setPlant(e.target.value) }
                /><br />
                <input
                    style={{ margin: '5px'}}
                    type='text'
                    placeholder='Water Frequency'
                    id='h2o'
                    name='h2o'
                    onChange={ e =>setPlant(e.target.value) }
                /><br />
                <button style={{ marginTop: '5px' }} type='submit'>Add</button>
            </AddPlantForm>
        </FormContainer>
    );
};