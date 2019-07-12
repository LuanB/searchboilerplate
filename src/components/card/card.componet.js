import React, { Component } from 'react';
import './card.styles.css';

export const Card = props => (
  <div className="card-container">
    <img
      src={`http://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      alt="monster"
    />
    <h1>{props.monster.name}</h1>
    <p>{props.monster.email}</p>
  </div>
);
