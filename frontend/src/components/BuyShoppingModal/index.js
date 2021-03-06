import React from 'react';
import CloseModal from '../../assets/img/close.svg';
import { GiWolfHowl } from 'react-icons/gi';
import './styles.css';

export function BuyShoppingModal({ totalCart }) {
  return (
    <div className="overlay">
      <div className="container-modal">
        <header>
          <GiWolfHowl />
        </header>

        <strong>Congratulations</strong>
        <p>
          Your items have been sent to the inventory, now you can redeem them!
        </p>

        <button type="button">
          <img src={CloseModal} alt="Fechar modal" />
        </button>
      </div>
    </div>
  );
}
