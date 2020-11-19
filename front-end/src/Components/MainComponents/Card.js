import React, { useState } from 'react';
import styled from 'styled-components';

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
    const { data } = props;
    
    const [isWatered, setIsWatered] = useState(data.watered);
    console.log(isWatered);
    const colorBasedOnState = currentState => {
        if(currentState === true){
            return 'royalblue';
          }
          else{
            return '#8a0303';
          }
        }

    const statusBarColor = {
        backgroundColor: colorBasedOnState(isWatered)
    }


    if (data === null) {
        return (
            <h2>LOADING...</h2>
        )
    }
    else {
        return(
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
                </AttrDiv>
            </PlantCard>
        )
        
    }
}