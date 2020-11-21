import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from './Card'
import styled from 'styled-components'

const CardsLayout = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
`

export default function Cards() {
    const [plantData, setPlantData] = useState(null);
    console.log("Plant Data", plantData);

    const getPlants = (() => {
        axios.get(`https://water-my-plants-2020.herokuapp.com/plants`)
          .then(response => {
            setPlantData(Object.values(response.data));
            console.log(Object.values(response.data));
          })
          .catch(err => { console.log(err) });
      })

      useEffect(() => {
          getPlants();
          console.log(plantData);
      }, [])

   if (plantData === null) {
        return (
          <h2>LOADING...</h2>
        )
      }
      else {
        return (
          <>
          <button className="signUpButton">
            <Link to="/addplant">Add Plant</Link>
          </button>
          <CardsLayout>
            {plantData.map((char, index )=> 
            { return <Card key={index} data={char} /> })}
          </CardsLayout>
          </>
        );
      }
    }