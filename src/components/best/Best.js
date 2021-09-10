import React from "react";
import img1 from "../../img/team/team-1.jpg";
import img2 from "../../img/team/team-2.jpg";
import img3 from "../../img/team/team-4.jpg";
import img4 from "../../img/team/team-3.jpg";
import "./best.css";
export default function Best() {
  return (
    <>
      <section id="services" class="services">
        <div class="container">
          <div class="section-title">
            <h2>Magnam dolores commodi suscipit</h2>
          </div>

          <div class="row">
            <div class="col-lg-3 col-md-6 icon-box">
              <div class="icon">
                <img src={img1} class="img-fluid" alt="" />
              </div>
              <h4 class="title">
                <a href="">Lorem Ipsum</a>
              </h4>
              <p class="description">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident
              </p>
            </div>
            <div class="col-lg-3 col-md-6 icon-box">
              <div class="icon">
                <img src={img2} class="img-fluid" alt="" />
              </div>
              <h4 class="title">
                <a href="">Dolor Sitema</a>
              </h4>
              <p class="description">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat tarad limino ata
              </p>
            </div>
            <div class="col-lg-3 col-md-6 icon-box">
              <div class="icon">
                <img src={img3} class="img-fluid" alt="" />
              </div>
              <h4 class="title">
                <a href="">Sed ut perspiciatis</a>
              </h4>
              <p class="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
            <div class="col-lg-3 col-md-6 icon-box">
              <div class="icon">
                <img src={img4} class="img-fluid" alt="" />
              </div>
              <h4 class="title">
                <a href="">Magni Dolores</a>
              </h4>
              <p class="description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
          <div class=" col-lg-12 col-md-12" data-wow-delay="0.2s">
            <a
              href="#about"
              class="btn-get-started "
            >
              Read More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
