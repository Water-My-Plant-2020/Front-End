import React, { useRef, useState } from 'react';
import {
    FormContainer,
    SignUpForm
}
from './style/addplant';

export default function AddPlant() {
    const [plantImg, setPlantImg] = useState([]);

    const hiddenFileInput = useRef(null);

    const handleClick = e => {
        hiddenFileInput.current.click();
    };

    const handleChange = e => {
        setPlantImg(e.target.files[0]);
        console.log('Set Plant Img: ', plantImg)
    };

    const formSubmit = e => {
        console.log("Add Plant Data submit: ", e);
    };

    return (
        <FormContainer onSubmit={ formSubmit }>
            <SignUpForm>
                <button className="signup" onClick={ handleClick }>
                    Upload Plant Image
                </button>
                <input
                    type="file"
                    name="image"
                    style={{ display: 'none' }}
                    ref={ hiddenFileInput }
                    onChange={ handleChange }
                />

            </SignUpForm>
            
        </FormContainer>
    );
};