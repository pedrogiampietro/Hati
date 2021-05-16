import React from 'react';

import { FaCrosshairs, FaSkullCrossbones } from 'react-icons/fa';
import { convertTimestempToDate } from '../../helpers/DateTime';
const DeathList = ({ playerDeaths }) => {
  return (
    <>
      <section id="tabs">
        <nav>
          <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
            <a
              className="nav-item nav-link active"
              id="nav-activity-tab"
              data-toggle="tab"
              href="#nav-activity"
              role="tab"
              aria-controls="nav-activity"
              aria-selected="true"
            >
              ACTIVITY
            </a>
            <a
              className="nav-item nav-link"
              id="nav-skills-tab"
              data-toggle="tab"
              href="#nav-skills"
              role="tab"
              aria-controls="nav-skills"
              aria-selected="false"
            >
              SKILLS
            </a>
          </div>
        </nav>
        <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-activity"
            role="tabpanel"
            aria-labelledby="nav-activity-tab"
          >
            <div className="timeline">
              <article className="panel">
                {playerDeaths && playerDeaths.length
                  ? playerDeaths.map((death) => {
                      return (
                        <ul key={death.time} className="list list-timeline">
                          <li>
                            <div className="list-timeline-time">
                              <time>{convertTimestempToDate(death.time)}</time>
                            </div>
                            {death.is_player === 1 ? (
                              <i className="fas fa-crosshairs list-timeline-icon bg-primary"></i>
                            ) : (
                              <i className="si si-ghost list-timeline-icon bg-primary"></i>
                            )}

                            <div className="list-timeline-content">
                              <div className="panel-heading">
                                <h2 className="panel-title">
                                  {death.is_player === 1
                                    ? `Fragged a player at level ${death.level}.`
                                    : `Died at level ${death.level}.`}

                                  {death.unjustified === 1 ? (
                                    <span className="badge badge-danger">
                                      unjustified
                                    </span>
                                  ) : null}
                                </h2>
                              </div>
                            </div>
                          </li>
                          <div className="parent flex-parent">
                            <div className="child flex-child">
                              <img
                                src="https://www.tibiawiki.com.br/images/e/e4/Outfit_Citizen_Male.gif"
                                className="profile-image rounded-circle bd-highlight mt-2 mb-3"
                                alt=""
                              />
                            </div>
                            <div className="child flex-child ml-3">
                              <span className="text-capitalize">
                                {/* <strong>Pedro Giampietro</strong> 73 Paladin */}
                                {death.killed_by.substr(2)}
                              </span>
                              {/* <code>
                                {death.mostdamage_by !== death.killed_by
                                  ? death.mostdamage_by
                                  : null}
                              </code> */}
                            </div>
                          </div>
                        </ul>
                      );
                    })
                  : null}
              </article>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-skills"
            role="tabpanel"
            aria-labelledby="nav-skills-tab"
          >
            Et et consectetur ipsum labore excepteur est proident excepteur ad
            velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt
            anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit
            non irure adipisicing aliqua ullamco irure incididunt irure non esse
            consectetur nostrud minim non minim occaecat. Amet duis do nisi duis
            veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui
            sit. Exercitation mollit sit culpa nisi culpa non adipisicing
            reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad
            duis occaecat ex.
          </div>
        </div>
      </section>
    </>
  );
};

export default DeathList;
