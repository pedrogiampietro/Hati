import React from 'react';
import CloseModal from '../../assets/img/close.svg';
import './styles.css';

export function BuyShoppingModal({ totalCart }) {
  return (
    <div className="overlay">
      <div className="container-modal">
        <header>1</header>

        <strong>Parabéns</strong>
        <p>Sua compra foi realizada com sucesso</p>

        <button type="button">
          <img src={CloseModal} alt="Fechar modal" />
        </button>
      </div>
    </div>
  );
}
