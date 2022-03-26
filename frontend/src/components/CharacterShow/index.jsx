import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export function CharacterShow({ name, level, vocation }) {
  return (
    <div className="CharacterShowContainer">
      <Link to={`/character/${name}`}>
        <h3 className="Name">{name}</h3>
      </Link>
      <span className="Level">{level || '1'}</span>
      <span>{vocation || 'None'}</span>
    </div>
  );
}
