import React, { useState } from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
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

    const onInputChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };
    
    const history = useHistory();
    console.log ("UseHistory", history);

    const formSubmit = e => {
    e.preventDefault();
    console.log("Data Submitted: ", data);
    
    axios
        .post("https://water-my-plants-2020.herokuapp.com/login", data)
        .then((res) => {
        console.log(res, "submit response");
        localStorage.setItem("token", res.data.token);
        history.replace("/plants");
        })
        .catch((err) => {
        console.log(err.message);
        });
    };


    return (
        <FormContainer className="form" >
            <LoginForm onSubmit={formSubmit}>
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
