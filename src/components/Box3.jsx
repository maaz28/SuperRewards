import React, { Component } from 'react';
import SelectPurchase from './GameCalculator/SelectPurchase';
import SelectPlayers from './GameCalculator/SelectPlayers';
import SelectTokens from './GameCalculator/SelectTokens';
import { calculateTokenPriceInDollars } from '../smartContractFunc/functions';

export default class Box3 extends Component {

  constructor() {
    super();

    this.state = {
      purchase: 28,
      players: 1000000,
      tokens: 500000,
      tokenPrice: 1000
    };

    this.setPurchase = this.setPurchase.bind(this);
    this.setPlayers = this.setPlayers.bind(this);
    this.setTokens = this.setTokens.bind(this);
  }

  setPurchase(value) {
    // console.log(value);
    this.setState({ purchase: value });
  }

  setPlayers(value) {
    // console.log(value);
    this.setState({ players: value });
  }

  setTokens(value) {
    // console.log(value);
    this.setState({ tokens: value });
  }


  componentDidMount() {
    this.tokenPriceCalculator();
  }

  tokenPriceCalculator = async () => {
    let tokenPrice = await calculateTokenPriceInDollars(1);
    console.log(tokenPrice)
    this.setState({
      tokenPrice
    })
  }

  render() {
    const { purchase, players, tokens, tokenPrice } = this.state;
    console.log(purchase, players, tokens, tokenPrice);
    let gameReward = players * (purchase / 2000000000) * tokens;
    if (isNaN(gameReward)) {
      gameReward = 0;
    }

    return (
      <div>
        <div id="box-3">
          <div className="row mb-5">
            <div className="col section-heading" style={{ marginBottom: "40px !important" }}>
              Game calculator
            </div>
          </div>

          <div className="row mb-2">
            <div className="col">
              <h4 className="medium-14"> <b>Total game rewards</b> </h4>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col">
              <h2 className="numeric-25">
                <b>
                  ${gameReward.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </b>
              </h2>
            </div>
          </div>

          <div className="container-fluid col-md-7 line-space">
            <SelectPlayers
              func={this.setPlayers}
            />
          </div>

          <div className="container-fluid col-md-7 line-space">
            <SelectPurchase
              func={this.setPurchase}
            />
          </div>

          <div className="container-fluid col-md-7">
            <SelectTokens
              func={this.setTokens}
            />
          </div>
        </div>
      </div>
    );
  }
}
