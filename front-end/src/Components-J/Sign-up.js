import React, { useState } from 'react';
import styled from 'styled-components'
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    
`

const SignUpForm = styled.form`
    justify-content: center;
    align-items: center;
    margin: 1em;
    width: 70%;
    background: #059033;
    padding: 5%
`
const InputSection = styled.section`
    flex-direction: column;
    align-content: center;
    margin: 1em;
`

const ButtonContainer = styled.div`
    margin: 1em;
    justify-content: center;
`
export default function SignUp() {
    const [data, setData] = useState({
        username: ``,
        phonenumber: ``,
        password: ``
    });

    const onInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    };

    const onFormSubmit = () => {
        console.log("Sign-in submitted and displayed below")
        console.log(data)
    }
    
    return (
        <FormContainer classname="formSignUp">
            <SignUpForm onSubmit={(event) => {event.preventDefault(); onFormSubmit();}}>
                <div>
                    <label><h2>Sign-Up</h2></label>
                </div>
                <InputSection>
                    <div>
                        <label htmlFor="username"> Username </label>
                    </div>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={onInputChange}
                    />
                </InputSection>

                <InputSection>
                    <div>
                        <label htmlFor="password"> Password </label>
                    </div>
                    <input
                        id="password"
                        type="text"
                        name="password"
                        placeholder="Password"
                        onChange={onInputChange}
                    />
                </InputSection>

                <InputSection>
                    <div>
                        <label htmlFor="phonenumber"> Phone Number </label>
                    </div>
                    <input
                        id="phonenumber"
                        type="text"
                        name="phonenumber"
                        placeholder="Phone Number"
                        onChange={onInputChange}
                    />
                    <ButtonContainer>
                        <button className="signUpButton" type='submit'>Sign-Up</button>
                    </ButtonContainer>
                </InputSection>
            </SignUpForm>
        </FormContainer>
    )

}