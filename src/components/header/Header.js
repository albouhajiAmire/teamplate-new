import React from "react";
import "./header.css";
import background from "../../img/slide/slide-1.jpg";
export default function Header() {
  return (
    <>
      <section id="hero">
        <div class="hero-container">
          <div class="carousel-inner" role="listbox">
            <div
              class="carousel-item active"
              style={{ backgroundImage: `url(${background})` }}
            >
              <div class="container loginUp">
                <a href="#about" class="login">
                  Read More
                </a>
                <a href="#about" class="signup">
                  Read More
                </a>
              </div>
              <div class="carousel-container">
                <div class="carousel-content">
                  <h2 class="animate__animated animate__fadeInDown">
                    Grow Your Business
                  </h2>
                  <p class="animate__animated animate__fadeInUp">
                    Ut velit est quam dolor ad a aliquid qui aliquid.
                  </p>
                  <div>
                    <a href="#about" class="button">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
