import React, { Component } from 'react';
import Dropdown from './NetworkCalculator/Dropdown';
import { calculateTokenPriceInDollars } from '../smartContractFunc/functions';
import { package_values, average_purchases_values, referral_values, virality_values, levels_values } from './NetworkCalculator/Dropdown_constant_values';

export default class Box2 extends Component {

  constructor() {
    super();

    this.state = {
      referrals: '',
      virality: '',
      levels: '',
      purchase: '',
      package: ''
    };

    this.setValue = this.setValue.bind(this);
  }

  setValue(value) {
    this.setState({ spots: value });
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
    const { investment, players, spots, tokenPrice } = this.state;
    console.log(investment, players, spots, tokenPrice);
    let tokens = (investment / tokenPrice);
    let profit = (players * 28 * 0.05);
    profit += (spots * 25 * 0.05);
    profit = profit * (tokens / 5000);
    if (isNaN(profit)) {
      profit = 0;
    }

    return (
      <div>
        <div id="box-3">
          <div className="row mb-5">
            <div className="col section-heading" style={{ marginBottom: "40px !important" }}>
              Network calculator
            </div>
          </div>

          <div className="row mb-2">
            <div className="col">
              <h4 className="medium-14"> <b>Total network rewards</b> </h4>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col">
              <h2 className="numeric-25">
                <b>
                  ${profit.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </b>
              </h2>
            </div>
          </div>

          <div className="container-fluid col-md-7 line-space">
            <Dropdown
              label="Your referrals"
              id="referrals"
              values={referral_values}
              func={this.setValue}
              default_value_index={4}
            />
          </div>

          <div className="container-fluid col-md-7 line-space">
            <Dropdown
              label="Virality"
              id="virality"
              values={virality_values()}
              func={this.setValue}
              default_value_index={7}
            />
          </div>

          <div className="container-fluid col-md-7 line-space">
            <Dropdown
              label="Levels"
              id="levels"
              values={levels_values()}
              func={this.setValue}
              default_value_index={9}
            />
          </div>

          <div className="container-fluid col-md-7 line-space">
            <Dropdown
              label="Average purchase"
              id="purchase"
              values={average_purchases_values}
              func={this.setValue}
              default_value_index={3}
            />
          </div>

          <div className="container-fluid col-md-7 line-space">
            <Dropdown
              label="Your Package"
              id="package"
              values={package_values}
              func={this.setValue}
              default_value_index={1}
            />
          </div>
        </div>
      </div>
    );
  }
}
