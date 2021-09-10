import React from "react";
import "./main.css";
import img1 from "../../img/portfolio/portfolio-1.jpg";
import img2 from "../../img/portfolio/portfolio-2.jpg";
import img3 from "../../img/portfolio/portfolio-3.jpg";
import img4 from "../../img/portfolio/portfolio-4.jpg";
import img5 from "../../img/portfolio/portfolio-5.jpg";
import img6 from "../../img/portfolio/portfolio-6.jpg";
import img7 from "../../img/portfolio/portfolio-7.jpg";
export default function Article() {
  return (
    <>
      <section id="portfolio" class="portfolio">
        <div class="container">
          <div class="section-title">
            <h2>Portfolio</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
            </p>
          </div>
          <div class="row portfolio-container">
            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="">
                <img src={img1} class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="">
                <img src={img2} class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="">
                <img src={img3} class="img-fluid" alt="" />
                <div class="">
                  <h4>App 2</h4>
                  <p>App</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <div class="">
                <img src={img4} class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Card 2</h4>
                  <p>Card</p>
                </div>
              </div>
            </div>

            <div class="col-lg-8 col-md-6 portfolio-item filter-web">
              <div class="">
                <img src={img5} class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>Web 2</h4>
                  <p>Web</p>
                </div>
              </div>
            </div>

            <div class="col-lg-8 col-md-6 portfolio-item filter-app">
              <div class="">
                <img src={img6} class="img-fluid" alt="" />
                <div class="portfolio-info">
                  <h4>App 3</h4>
                  <p>App</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <div class="">
                <img src={img7} class="img-fluid" alt="" />
                <div class="">
                  <h4>Card 1</h4>
                  <p>Card</p>
                </div>
              </div>
            </div>
          </div>
          <div class="section-title">
            <h2>Portfolio</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
            </p>
            <form class="row g-3 formulaire">
              <div class="col-auto">
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                  placeholder="email"
                />
              </div>
              <div class="col-auto">
                <button type="submit" class="btn  mb-3">
                  Confirm identity
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
