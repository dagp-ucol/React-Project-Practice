import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div className='card-container'>
        <p class="aligncenter"><img align="center" width="180" height="180" alt="montser" src={`https://robohash.org/${props.monster.id}?set=set5`} /> </p>
        <h1> {props.monster.name} </h1>
        <p> {props.monster.email} </p>
    </div>
)