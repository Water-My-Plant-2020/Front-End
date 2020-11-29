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
    const [ visible, setVisible ] = useState(true);
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

    const formSubmit = e => {
    e.preventDefault();
    
    axios
        .post("https://water-my-plants-2020.herokuapp.com/login", data)
        .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.replace("/plants");
        setVisible(false);
        })
        .catch((err) => {
        console.log(err.message);
        });
    };

    if (visible === true) {
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
        );
    } else {
        return(
            <>
                <button
                    className="loginButton"
                    type='submit' style={{ marginRight: '25px' }}
                    onClick={() => {
                        axios
                        .get('https://water-my-plants-2020.herokuapp.com/logout')
                        .then( res => {
                            console.log("Log Out Log");
                            history.replace("/");
                            setVisible(true);
                        })
                        .catch( err => {
                            console.log("Log Out Error: ", err.message)
                        });
                    }}
                >
                    Log Out
                </button>
            </>
        );
    };
};
