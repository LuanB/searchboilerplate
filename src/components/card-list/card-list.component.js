import React from 'react';
import './card-list.style.css';
import { Card } from '../card/card.componet';

export const CardList = props => (
  <div className="card-list">
    {props.monsters.map((monster, id) => (
      <Card key={id} monster={monster} />
    ))}
  </div>
);
