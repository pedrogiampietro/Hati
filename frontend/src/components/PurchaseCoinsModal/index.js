import React from 'react';
import CloseModal from '../../assets/img/close.svg';
import { GiWolfHowl } from 'react-icons/gi';
import './styles.css';

export function PurchaseCoinsModal({ totalCart }) {
  return (
    <div className="overlay">
      <div className="container-modal">
        <header>
          <GiWolfHowl />
        </header>

        <strong>Parabéns</strong>
        <p>Sua compra foi realizada com sucesso</p>

        <button type="button">
          <img src={CloseModal} alt="Fechar modal" />
        </button>
      </div>
    </div>
  );
}
