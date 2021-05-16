import React from 'react';
import { Link } from 'react-router-dom';

const CharacterList = ({ characterList }) => {
  return (
    <table className="table table-striped table-condensed">
      <tbody>
        <tr>
          <td>
            <b>Characters</b>
          </td>
          <th>Status</th>
        </tr>
        {characterList.map((list, index) => {
          return (
            <tr key={list.name}>
              <td>
                <b>{index + 1}. </b>
                <Link to={`/character/${list.name}`}>{list.name}</Link>
              </td>
              <td>Offline</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CharacterList;
