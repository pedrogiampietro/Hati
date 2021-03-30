import React from 'react';

import MagicIcon from '../../assets/img/skills/magic.svg';
import FistIcon from '../../assets/img/skills/first.svg';
import SwordIcon from '../../assets/img/skills/sword.svg';
import AxeIcon from '../../assets/img/skills/axe.svg';
import ClubIcon from '../../assets/img/skills/club.svg';
import DistIcon from '../../assets/img/skills/dist.svg';
import ShieldingIcon from '../../assets/img/skills/shielding.svg';
import FishingIcon from '../../assets/img/skills/fishing.svg';

import './styles.css';

const PlayerSkills = (props) => {
  return (
    <div className="row panel-tag ">
      <div className="col-auto col-xl-3 d-sm-flex align-items-center con-tooltip top">
        <span className="width-6 height-2 d-inline-flex align-items-center justify-content-center position-relative pb-6">
          <img
            className="border border-primary text-primary img-thumbnail"
            src={MagicIcon}
            alt="MagicLevel"
            style={{ width: '60px', height: 'auto' }}
          />

          <span className="badge badge-icon pos-top pos-right">
            {props.skillMagic}
          </span>
        </span>
        <div className="tooltip">
          <p>Magic Level {props.skillMagic}</p>
        </div>
      </div>
      <div className="col-auto col-xl-3 d-sm-flex align-items-center con-tooltip top">
        <span className="width-6 height-2 d-inline-flex align-items-center justify-content-center position-relative pb-6">
          <img
            className="border border-primary text-primary img-thumbnail"
            src={FistIcon}
            alt="Fist"
            style={{ width: '60px', height: 'auto' }}
          />
          <span className="badge badge-icon pos-top pos-right">
            {props.skillFist}
          </span>
        </span>
        <div className="tooltip">
          <p>Fist {props.skillFist}</p>
        </div>
      </div>
      <div className="col-auto col-xl-3 d-sm-flex align-items-center con-tooltip top">
        <span className="width-6 height-2 d-inline-flex align-items-center justify-content-center position-relative pb-6">
          <img
            className="border border-primary text-primary img-thumbnail"
            src={SwordIcon}
            alt="Sword"
            style={{ width: '60px', height: 'auto' }}
          />
          <span className="badge badge-icon pos-top pos-right">
            {props.skillSword}
          </span>
        </span>
        <div className="tooltip">
          <p>Sword {props.skillSword}</p>
        </div>
      </div>
      <div className="col-auto col-xl-3 d-sm-flex align-items-center con-tooltip top">
        <span className="width-6 height-2 d-inline-flex align-items-center justify-content-center position-relative pb-6">
          <img
            className="border border-primary text-primary img-thumbnail"
            src={AxeIcon}
            alt="Axe"
            style={{ width: '60px', height: 'auto' }}
          />
          <span className="badge badge-icon pos-top pos-right">
            {props.skillAxe}
          </span>
        </span>
        <div className="tooltip">
          <p>Axe {props.skillAxe}</p>
        </div>
      </div>
      <div className="col-auto col-xl-3 d-sm-flex align-items-center con-tooltip bottom">
        <span className="width-6 height-2 d-inline-flex align-items-center justify-content-center position-relative pb-6">
          <img
            className="border border-primary text-primary img-thumbnail"
            src={ClubIcon}
            alt="Club"
            style={{ width: '60px', height: 'auto' }}
          />
          <span className="badge badge-icon pos-top pos-right">
            {props.skillClub}
          </span>
        </span>
        <div className="tooltip">
          <p>Club {props.skillClub}</p>
        </div>
      </div>
      <div className="col-auto col-xl-3 d-sm-flex align-items-center con-tooltip bottom">
        <span className="width-6 height-2 d-inline-flex align-items-center justify-content-center position-relative pb-6">
          <img
            className="border border-primary text-primary img-thumbnail"
            src={DistIcon}
            alt="Dist"
            style={{ width: '60px', height: 'auto' }}
          />
          <span className="badge badge-icon pos-top pos-right">
            {props.skillDist}
          </span>
        </span>
        <div className="tooltip">
          <p>Dist {props.skillDist}</p>
        </div>
      </div>
      <div className="col-auto col-xl-3 d-sm-flex align-items-center con-tooltip bottom">
        <span className="width-6 height-2 d-inline-flex align-items-center justify-content-center position-relative pb-6">
          <img
            className="border border-primary text-primary img-thumbnail"
            src={ShieldingIcon}
            alt="Shielding"
            style={{ width: '60px', height: 'auto' }}
          />
          <span className="badge badge-icon pos-top pos-right">
            {props.skillShielding}
          </span>
        </span>
        <div className="tooltip">
          <p>Shielding {props.skillShielding}</p>
        </div>
      </div>
      <div className="col-auto col-xl-3 d-sm-flex align-items-center con-tooltip bottom">
        <span className="width-6 height-2 d-inline-flex align-items-center justify-content-center position-relative pb-6">
          <img
            className="border border-primary text-primary img-thumbnail"
            src={FishingIcon}
            alt="Fishing"
            style={{ width: '60px', height: 'auto' }}
          />
          <span className="badge badge-icon pos-top pos-right">
            {props.skillFishing}
          </span>
        </span>
        <div className="tooltip">
          <p>Fishing {props.skillFishing}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerSkills;
