import React, { Component } from "react";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <>
        <footer id="footer">
          <div class="footer-top">
          <hr  style={{size:"8" ,width:"100%" , color:"red"}}/>
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <div class="footer-info">
                    <h4>Groovin</h4>
                  </div>
                </div>

                <div class="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Terms of service</a>
                    </li>
                    <li>
                      <a href="#">Privacy policy</a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                </div>

                <div class="col-lg-4 col-md-6 footer-newsletter">
                  <h4> <i class="fab fa-sketch">Our Newsletter</i></h4>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
