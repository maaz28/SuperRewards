import React from 'react';
import Logo from '../images/logo1.png'

import './App.css';

export default class Box1 extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      onMobileDevice: false
    }
  }


  componentDidMount() {
    var useragent = navigator.userAgent;
    if (useragent.indexOf('iPhone') !== -1 || useragent.indexOf('Android') !== -1) {
      this.setState({ onMobileDevice: true })
    }
  }

  render() {
    return (
      <div>
        <div id="box-1">
          <div className="row">
            <div className="col float-left ml-4">
              <a > <img src={Logo} style={{ width: '170px', paddingLeft: '20px' }} alt="" srcset="" /></a>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="row text-center mb-5 title-container">
            <div className="col">
              <div className="page-title titleBar">
                <b>THE REWARD</b>
              </div>
            </div>
          </div>

          {
            (this.state.onMobileDevice) ? (
              <div className="row text-center mb-4">
                <div className="col landing-para">
                  <p className="lead sub-head">
                    SuperOne unites crypto and mobile gaming with a uniquely
                    thrilling concept, focusing on millennials amidst
                    a global audience of 2 billion.
              </p>
                  {/* <p className="lead sub-head">
                    With SuperGlobal, you can own a direct part of SuperOne's
                    revenue streams through our innovative revenue-based
                    financing model.
              </p> */}
                </div>
              </div>
            ) : (
                <>
                  <div className="row text-center mb-4">
                    <div className="col landing-para">
                      <p className="lead sub-head">
                        SuperOne unites crypto and mobile gaming with a uniquely
              </p>
                      <p className="lead sub-head">
                        thrilling concept, focusing on millennials amidst
            </p>
                      <p className="lead sub-head">
                        a global audience of 2 billion.
            </p>
                    </div>
                  </div>
                  {/* <div className="row text-center mb-4">
                    <div className="col landing-para">
                      <p className="lead sub-head">
                        With SuperGlobal, you can own a direct part of SuperOne's
              </p>
                      <p className="lead sub-head">
                        revenue streams through our innovative revenue-based
              </p>
                      <p className="lead sub-head">
                        financing model.
            </p>
                    </div>
                  </div> */}
                </>
              )
          }

        </div>

      </div>
    );
  }


}
