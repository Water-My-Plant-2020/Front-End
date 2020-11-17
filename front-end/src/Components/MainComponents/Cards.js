import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card'

export default function Cards() {
    const [plantData, setPlantData] = useState(null);

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
          <div>
            {plantData.map((char, index )=> 
            { return <Card key={index} data={char} /> })}
          </div>
        );
      }
    }