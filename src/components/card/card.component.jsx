import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div className='card-container'>
        <p class="aligncenter"><img align="center" width="180" height="180" alt="montser" src={`https://robohash.org/${props.monster.id}?set=set5`} /> </p>
        <h1> Name: {props.monster.name} </h1>
        <h2> Email: {props.monster.email} </h2>
        <h3> Street: {props.monster.address.street} </h3>
    </div>
)