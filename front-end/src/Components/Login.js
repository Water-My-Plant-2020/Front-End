import React, { useState, useEffect } from 'react';

export default function Form() {

    const [data, setData] = useState({
        username : '',
        password : ''
    });

    useEffect(() => {
        console.log(data);
    }, [data])

    const onInputChange = event => {
        setData({
            ...data, 
            [event.target.name]: event.target.value
        })
    };

    const onFormSubmit = () => {
        console.log(`Login Submitted: ${data}`);
    }


    return(
        <div className="form" >
            <form onSubmit={(event) => {event.preventDefault(); onFormSubmit(); }}>
                <label htmlFor="username"> Username: </label>
                <input 
                    id="username" 
                    type="text"
                    name="username"
                    placeholder="Username/Email"
                    onChange={onInputChange}
                    />
                <label htmlFor="password"> Password: </label>
                <input 
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={onInputChange}
                     />
                <button type='submit'>Login</button>
            </form>
        </div>
    )

}
