import React from 'react';
import Container from '../Layouts/Container';

import './styles.css';

const CharacterTrade = () => {
  return (
    <Container>
      <div class="card">
        <div class="card-body">
          <div className="Auction">
            <div className="AuctionHeader">
              <div className="AuctionLinks">
                <a href="https://www.tibia.com/charactertrade/?subtopic=currentcharactertrades&page=details&auctionid=487885&source=overview&filter_profession=0&filter_levelrangefrom=0&filter_levelrangeto=0&filter_world=&filter_worldpvptype=9&filter_worldbattleyestate=0&filter_skillid=&filter_skillrangefrom=0&filter_skillrangeto=0&order_column=101&order_direction=1&searchtype=1&currentpage=1">
                  <img
                    title="show auction details"
                    src="https://static.tibia.com/images/global/content/button-details-idle.png"
                  />
                </a>
              </div>
              <div className="AuctionCharacterName">
                <a href="https://www.tibia.com/charactertrade/?subtopic=currentcharactertrades&page=details&auctionid=487885&source=overview&filter_profession=0&filter_levelrangefrom=0&filter_levelrangeto=0&filter_world=&filter_worldpvptype=9&filter_worldbattleyestate=0&filter_skillid=&filter_skillrangefrom=0&filter_skillrangeto=0&order_column=101&order_direction=1&searchtype=1&currentpage=1">
                  Elite Makro
                </a>
              </div>
              Level: 216 | Vocation: Elite Knight | Male | World:{' '}
              <a
                target="_blank"
                href="https://www.tibia.com/community/?subtopic=worlds&world=Kenora"
              >
                Kenora
              </a>
              <br />
            </div>
            <div className="AuctionBody">
              <div className="AuctionBodyBlock AuctionDisplay AuctionOutfit">
                <div className="AuctionNewIcon">
                  <img src="https://static.tibia.com/images/global/content/ribbon-new-top-left.png" />
                </div>
                <img
                  className="AuctionOutfitImage"
                  src="https://static.tibia.com/images/charactertrade/outfits/430_0.gif"
                />
              </div>
              <div className="AuctionBodyBlock AuctionDisplay AuctionItemsViewBox">
                <div className="CVIcon CVIconObject" title="Zaoan legs">
                  <img src="https://static.tibia.com/images/charactertrade/objects/10387.gif" />
                </div>
                <div className="CVIcon CVIconObject" title="prismatic armor">
                  <img src="https://static.tibia.com/images/charactertrade/objects/16110.gif" />
                </div>
                <div className="CVIcon CVIconObject" title="shiny blade">
                  <img src="https://static.tibia.com/images/charactertrade/objects/16175.gif" />
                </div>
                <div className="CVIcon CVIconObject" title="gnome sword">
                  <img src="https://static.tibia.com/images/charactertrade/objects/27651.gif" />
                </div>
              </div>
              <div className="AuctionBodyBlock ShortAuctionData">
                <div className="ShortAuctionDataLabel">Auction Start:</div>
                <div className="ShortAuctionDataValue">
                  May&nbsp;24&nbsp;2021, 10:07&nbsp;CEST
                </div>
                <div className="ShortAuctionDataLabel">Auction End:</div>
                <div className="ShortAuctionDataValue">
                  May&nbsp;25&nbsp;2021, 19:30&nbsp;CEST
                </div>
                <div className="ShortAuctionDataBidRow">
                  <div className="ShortAuctionDataLabel">Minimum Bid:</div>
                  <div className="ShortAuctionDataValue">
                    <b>600</b>{' '}
                    <img
                      src="https://static.tibia.com/images//account/icon-tibiacointrusted.png"
                      className="VSCCoinImages"
                      title="Transferable Tibia Coins"
                    />
                  </div>
                </div>
              </div>
              <div className="AuctionBodyBlock CurrentBid">
                <div className="Container">
                  <div className="MyMaxBidLabel">My Bid Limit</div>
                  <form
                    action="https://www.tibia.com/charactertrade/?subtopic=currentcharactertrades"
                    method="POST"
                  >
                    <input
                      className="MyMaxBidInput"
                      type="text"
                      name="maxbid"
                    />
                    <input
                      type="hidden"
                      name="page"
                      defaultValue="confirmsubmitbid"
                    />
                    <input
                      type="hidden"
                      name="auctionid"
                      defaultValue={487885}
                    />
                    <input type="hidden" name="currentpage" defaultValue={1} />
                    <input
                      type="hidden"
                      name="filter_profession"
                      defaultValue={0}
                    />
                    <input
                      type="hidden"
                      name="filter_levelrangefrom"
                      defaultValue={0}
                    />
                    <input
                      type="hidden"
                      name="filter_levelrangeto"
                      defaultValue={0}
                    />
                    <input type="hidden" name="filter_world" defaultValue />
                    <input
                      type="hidden"
                      name="filter_worldpvptype"
                      defaultValue={9}
                    />
                    <input
                      type="hidden"
                      name="filter_worldbattleyestate"
                      defaultValue={0}
                    />
                    <input type="hidden" name="filter_skillid" defaultValue />
                    <input
                      type="hidden"
                      name="filter_skillrangefrom"
                      defaultValue={0}
                    />
                    <input
                      type="hidden"
                      name="filter_skillrangeto"
                      defaultValue={0}
                    />
                    <input
                      type="hidden"
                      name="order_column"
                      defaultValue={101}
                    />
                    <input
                      type="hidden"
                      name="order_direction"
                      defaultValue={1}
                    />
                    <div
                      className="BigButton"
                      style={{
                        backgroundImage:
                          'url(https://static.tibia.com/images/global/buttons/sbutton_green.gif)',
                      }}
                    >
                      <div
                        onmouseover="MouseOverBigButton(this);"
                        onmouseout="MouseOutBigButton(this);"
                      >
                        <div
                          className="BigButtonOver"
                          style={{
                            backgroundImage:
                              'url("https://static.tibia.com/images/global/buttons/sbutton_green_over.gif")',
                            visibility: 'hidden',
                          }}
                        />
                        <input
                          className="BigButtonText"
                          type="submit"
                          defaultValue="Bid On Auction"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="AuctionBodyBlock SpecialCharacterFeatures">
              <div className="Entry">
                <img
                  className="CharacterFeatureCategory"
                  src="https://static.tibia.com/images/charactertrade/usp-category-2.png"
                />
                55 Achievement Points
              </div>
              <div className="Entry">
                <img
                  className="CharacterFeatureCategory"
                  src="https://static.tibia.com/images/charactertrade/usp-category-3.png"
                />
                Blessings active: 7/7, Twist of Fate active: yes
              </div>
              <div className="Entry">
                <img
                  className="CharacterFeatureCategory"
                  src="https://static.tibia.com/images/charactertrade/usp-category-0.png"
                />
                99 Sword Fighting (Loyalty bonus not included)
              </div>
              <div className="Entry">
                <img
                  className="CharacterFeatureCategory"
                  src="https://static.tibia.com/images/charactertrade/usp-category-0.png"
                />
                91 Shielding (Loyalty bonus not included)
              </div>
              <div className="Entry">
                <img
                  className="CharacterFeatureCategory"
                  src="https://static.tibia.com/images/charactertrade/usp-category-1.png"
                />
                340803 Gold total in bank, inventory and depot
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CharacterTrade;
