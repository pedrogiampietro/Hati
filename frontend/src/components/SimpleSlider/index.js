import React from 'react';

const SimpleSlider = ({ setWallet, coins, setCoins }) => {
  React.useEffect(() => {
    setWallet(coins * 10);
  }, [coins, setWallet]);

  return (
    <div className="pricing">
      <div className="pricing-slider center-content">
        <label className="form-slider">
          <span>Choose the amount of tibia coins you would like to buy.</span>
          <input
            type="range"
            step="50"
            max="1000"
            value={coins}
            onChange={(e) => setCoins(e.target.value)}
          />
        </label>
        <div className="pricing-slider-value"></div>
      </div>

      <div className="pricing-items">
        <div className="pricing-item">
          <div className="pricing-item-inner">
            <div className="pricing-item-content">
              <div className="pricing-item-header center-content">
                <div className="pricing-item-title">Quantity</div>
                <div className="pricing-item-price">
                  <span className="pricing-item-price-currency">
                    {coins} Tibia Coins
                  </span>
                  <span className="pricing-item-price-amount"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleSlider;
