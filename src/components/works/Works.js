import React from "react";
import "./works.css";
import img1 from "../../img/team/team-1.jpg";
import img2 from "../../img/team/team-2.jpg";
import img3 from "../../img/team/team-3.jpg";
export default function Works() {
  return (
    <>
      <section id="team" class="team">
        <div class="container">
          <div class="section-title">
            <h2>Magnam dolores commodi suscipit.</h2>
          </div>

          <div class="row">
            <div class=" col-lg-4 col-md-6">
              <div class="member">
                <img src={img1} class="img-fluid" alt="" />
                <div class="member-info-content">
                  <a
                    href="#about"
                    class="btn-get-started "
                  >
                    Read More
                  </a>
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                </div>
              </div>
            </div>

            <div class=" col-lg-4 col-md-6">
              <div class="member">
                <img src={img2} class="img-fluid" alt="" />
                
                <div class="member-info-content">
                  <a
                    href="#about"
                    class="btn-get-started "
                  >
                    Read More
                  </a>
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                </div>
               
              </div>
            </div>

            <div class=" col-lg-4 col-md-6" >
              <div class="member">
                <img src={img3} class="img-fluid" alt="" />
                <div class="member-info-content">
                  <a
                    href="#about"
                    class="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    Read More
                  </a>
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
