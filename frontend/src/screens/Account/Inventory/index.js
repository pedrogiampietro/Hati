import React from 'react';

import './styles.css';

const Inventory = () => {
  return (
    <main>
      <section id="inventory-window">
        <div>
          <ul className="filters">
            <li className="todos active">
              <div>Todos</div>
              <span>28</span>
            </li>
            <li className="resgatados">
              <div>Resgatados</div>
              <span>28</span>
            </li>
            <li className="fechados">
              <div>Fechados</div>
              <span>0</span>
            </li>
            <li className="pendentes">
              <div>Pendentes</div>
              <span>0</span>
            </li>
          </ul>
        </div>
        <div>
          <div className="inventory-items-container ">
            <ul className="inventory-items render resgatados fechados pendentes">
              <li
                data-url="#"
                data-product={11315}
                onclick="renderPartialFromAjax(this)"
                className="Delivered"
                // selected
              >
                <h2 className="text-white">
                  Free Fire - 85 Diamantes + 10% de Bônus
                </h2>
                <div className="gamebox">
                  <div className="card opened">
                    <div className="left" />
                    <div className="right" />
                    <div className="top" />
                    <div className="bottom" />
                    <div className="front" />
                    <div className="game">
                      <img
                        src="https://www.tibiawiki.com.br/images/2/2e/Plate_Armor.gif"
                        className="game-cover"
                      />
                    </div>
                    <div className="back" />
                  </div>
                </div>
                <div className="current-quantity">1</div>
              </li>
            </ul>
          </div>
        </div>
        <div id="formConta" style={{ display: 'none' }} />
      </section>
    </main>
  );
};

export default Inventory;
