import React from 'react';
import Logo from '../images/logo1.png'
import { Grid } from '@material-ui/core';

export default function Box3() {
  return (
    <div>
      <div id="box-5">
        <div className="container-fluid col-md-10">
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12} md={2}>
                <div style={{ color: 'white' }} className="float-left">
                  <a > <img src={Logo} style={{ width: '135px' }} alt="" srcset="" /></a>
                </div>
              </Grid>
              <Grid item xs={12} md>
                <span style={{ color: 'white' }}>
                  A new and unique blockchain gaming and networking platform.
                </span>
              </Grid>
            </Grid>
            <br />
            <br />
            <Grid container spacing={2}>
              <Grid item xs={12} md>
                <p class="medium-12">
                  All SuperOne games and products are operated by SuperOne
                  Limited (UK company 11619286) with registered address 20-22 Wenlock Road, London N1 7GU, United Kingdom, Telephone +44 7537 184080,
                  Email: hello@super.one.
                </p>
              </Grid>
              <Grid item xs={12} md>
                <p style={{ color: 'white' }} class="medium-12 footer-terms-copyright">Terms of Use | Privacy Policy</p>
                <p style={{ color: 'white' }} class="medium-12 footer-terms-copyright">Copyright 2019 © Super One. All rights reserved.
                </p>
              </Grid>
            </Grid>
          </div>

        </div>
      </div>
    </div>
  );
}

