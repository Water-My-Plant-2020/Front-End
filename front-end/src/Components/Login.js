import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';


const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
`

const LoginForm = styled.form`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    margin: 1em;
`
const InputSection = styled.section`
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-left: 1em;
`

const ButtonContainer = styled.div`
    display: flex;
    margin-top: 1em;
    justify-content: flex-end;
`

export default function Form() {


    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const getLogin = (() => {
        axios.get(`https://water-my-plants-2020.herokuapp.com/users`)
          .then(response => {
            console.log(Object.values(response.data));
          })
          .catch(err => { console.log(err) });
      })

      

    // useEffect(() => {
    //     console.log(data);
    // }, [data])

    const onInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    };

    const onFormSubmit = () => {
        console.log('Login Submitted and Displayed on Next Line');
        console.log(data);

    }


    return (
        <FormContainer className="form" >
            <LoginForm onSubmit={(event) => { event.preventDefault(); onFormSubmit(); }}>
                <InputSection>
                    <div>
                        <label htmlFor="username"> Username </label>
                    </div>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Username / Email"
                        onChange={onInputChange}
                    />
                </InputSection>

                <InputSection>
                    <div>
                        <label htmlFor="password"> Password </label>
                    </div>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={onInputChange}
                    />
                    <ButtonContainer>
                        <button className="loginButton" type='submit'>Login</button>
                    </ButtonContainer>
                </InputSection>
            </LoginForm>
        </FormContainer>
    )

}
