import React, { Component } from 'react';
import Dropdown from './NetworkCalculator/Dropdown';
import { calculateTokenPriceInDollars } from '../smartContractFunc/functions';
import { package_values, average_purchases_values, referral_values, virality_values, levels_values } from './NetworkCalculator/Dropdown_constant_values';
import { level1, level2, level3, level4, level5, level6, level7, level8, level9, level10 } from './NetworkCalculator/algo';

const levels_arr = [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10];

export default class Box2 extends Component {

  constructor() {
    super();

    this.state = {
      referrals: 5,
      virality: 2,
      levels: 1,
      purchase: 100,
      pkg: 100
    };

    this.setValue = this.setValue.bind(this);
  }

  setValue(value, name) {
    this.setState({ [name]: value });
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
    const { referrals,
      virality,
      levels,
      purchase,
      pkg } = this.state;
    let func = levels_arr[levels - 1];
    let profit = func((referrals, virality, pkg, purchase));
    console.log(profit);
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
