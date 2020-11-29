import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios'

const PlantCard = styled.section`
    display: flex;
    flex-flow: column wrap;
    background: #7baa47;
    width: fit-content;
    max-width: 30%;
    min-width: 20%;
    height: fit-content;
    min-height: 35rem;
    margin: 2em auto;
    align-items: center;
    
    margin: 1em;
    border-radius: 10px;
`;

const ImgDiv = styled.div`
    margin-left: 0;
    text-align: left;
    padding: .5em;
`

const PlantImg = styled.img`
    border: 3px solid #124d4f;
    border-radius: 30px;
    max-height: 15rem;
    max-width: 20em;
`;

const AttrDiv = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    margin: 1em;
    text-align: left;
`;

const Name = styled.h2`
    font-size: 2.5rem;
    margin: 0;
`;

const Form = styled.form`
    display: flex;
    height: 100%;
    flex-direction: column;
    margin: 1em;
    text-align: left;
`

const StatusBar = styled.div`
    display: flex;
    height: 3em;
    width: 95%;
    align-items: center;
    padding: 0 3% 0 2%;
    margin-bottom: 1em;
    color: white;
`

export default function Card(props) {
    const [ edit, setEdit ] = useState(false);
    const { data } = props;
    
    const [isWatered, setIsWatered] = useState(data.watered);
    const colorBasedOnState = currentState => {
        if(currentState === true){
            return 'royalblue';
        }
        else{
            return '#8a0303';
        }
    };

    const statusBarColor = {
        backgroundColor: colorBasedOnState(isWatered)
    }

    const history = useHistory();
    const deletePlant = e => {
        axios
        .delete(`https://water-my-plants-2020.herokuapp.com/plants/${ data.id }`)
        .then((res) => {
            console.log("Response from API for deletePlant: ", res.data)
            history.replace("/plants")
        })
        .catch((err) => {
            console.log("Error for deletePlant: ", err.message)
        })
    };

    const editUpdate = e => {
        // preventing default action of page refresh
        e.preventDefault();
        console.log("Edit Update Props: ", e.target)
        // Adding form data to variable updateData
        const updateData = {
            id: e.target.id.value,
            nickname: e.target.nickname.value,
            species: e.target.species.value,
            h2oFrequency: e.target.h2o.value
        }
        console.log("Update Plant: ", updateData)
        axios
        .put(`https://water-my-plants-2020.herokuapp.com/plants/id/${ data.id }`, updateData)
        .then((res) => {
            console.log("Response from API for Plant Update: ", res.data)
        })
        .catch((err) => {
            console.log("Error for Plant Update: ", err.message)
        })
        setEdit(false);
    };

    const cancel = () => {
        setEdit(false);
    };


    if (data === null) {
        return (
            <h2>LOADING...</h2>
        )
    }
    else {
        return(
            <>
                {edit ? 
                    <>
                    <PlantCard>
                        <AttrDiv>
                            <Form onSubmit={ editUpdate }>
                                <input style={{ display: 'none' }} type='text' defaultValue={ data.id } id='id'/>
                                <p>Nick name:</p><input type='text' defaultValue={ data.nickname } id='nickname' name='nickname' />
                                <p>Species:</p><input type='text' defaultValue={ data.speciesName } id='species' name='species' />
                                <p>Watering Frequency:</p><input type='text' defaultValue={ data.h2oFrequency } id='h2o' name='h2o' />                                
                                <p></p>
                                <button type='submit' style={{width:'10em', margin: '0 auto'}}>Update</button>
                                <button onClick={ cancel } style={{width:'10em', margin: '0 auto'}}>Cancel</button>
                            </Form>
                        </AttrDiv>
                    </PlantCard>
                    </>
                :
                    <PlantCard>
                        <StatusBar style={statusBarColor}><h4>{isWatered === true ? 'Plant Has Been Watered' : 'Plant Needs Water'}</h4></StatusBar>
                        <ImgDiv>
                            <PlantImg src={data.plantImage}></PlantImg>
                        </ImgDiv>
                        <AttrDiv>
                            <Name>{data.nickname}</Name>
                            <p>{`Species: ${data.speciesName}`}</p>
                            <p>{`Watering Frequency: ${(data.h2oFrequency).toUpperCase()}`}</p>
                            <p></p>
                            <button onClick = {() => {setIsWatered(true)}} style={{width:'10em', margin: '0 auto'}}>Water</button>
                            <button onClick = {() => {
                                setEdit(!edit);
                                console.log("Edit Click");
                            }} style={{width:'10em', margin: '0 auto'}}>Edit</button>
                            <button onClick = {deletePlant} style={{width:'10em', margin: '0 auto'}}>Delete</button>
                        </AttrDiv>
                    </PlantCard>
                }
            </>
        )
        
    }
}