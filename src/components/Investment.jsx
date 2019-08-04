import React from 'react';
import img from '../images/file-download.svg';
import { CopyToClipboard } from 'react-copy-to-clipboard'
// import React from 'react';
import copy from '../images/copy.svg'
import download from '../images/download.svg'
import { Grid } from '@material-ui/core';

export default class Box4 extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      value: 'https://so.link/global',
      copied: false,
    }
  }


  clickBtn() {
    window.open(this.state.value, '_blank')
  }

  onSelect = (event) => {
    this.setState({
      value: event.target.value
    })
    console.log(event.target.value);
  }

  render() {
    return (
        <div className="container-fluid col-md-7">
          <div id="card-1">
            <div className="card-body">
              <Grid container spacing={1}>
                <Grid item xs={12} md={4}>
                  <img src={img} className="float-left mr-3" alt="" />
                  <h5 className="card-title mt-2 text-uppercase">
                    <b>The Global</b>
                  </h5>
                </Grid>
                <Grid item xs={12} md>
                  <select className="card-button-text custom-select custom-select-lg" onChange={this.onSelect}>
                    <option value="https://so.link/global">English</option>
                    <option value="https://so.link/global-german">German</option>
                    <option value="https://so.link/global-french">French</option>
                    <option value="https://so.link/global-thai">Thai</option>
                    <option value="https://so.link/global-vietnamese">Vietnamese</option>
                  </select>
                </Grid>
                <Grid item xs={12} md>
                  <CopyToClipboard text={this.state.value}
                                   onCopy={() => this.setState({ copied: true })}>
                    <button
                        style={{ color: '#B267CC', borderColor: '#B267CC', width: '100%' }}
                        type="button"
                        className="card-button-text btn mr-2 btn-lg btn-outline-primary custom-color text-uppercase"
                    >
                      <img src={copy} /> Copy link </button>
                  </CopyToClipboard>
                </Grid>
                <Grid item xs={12} md>
                  <button
                      style={{ color: '#B267CC', borderColor: '#B267CC', width: '100%' }}
                      type="button"
                      className="card-button-text btn btn-lg btn-outline-primary custom-color text-uppercase"
                      onClick={() => this.clickBtn()}
                  >
                    <img src={download} /> Download </button>

                </Grid>
              </Grid>
            </div>
          </div>
        </div>
    );
  }
}
