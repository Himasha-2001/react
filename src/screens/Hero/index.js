import React from "react";

function Hero() {
  return (
    <section className="hero is-large" style={{ padding: "2px" }}>
      <div
        className="hero-body "
        style={{ padding: "100px", backgroundColor: "#F0EBEB" }}
      >
        <div className="home-hero">
          <div className="col">
            <div className="columns">
              <div className="column is-half">
                <p
                  className="title is-3 has-text-black mr-0 pt-2"
                  style={{
                    fontFamily:
                      'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                  }}
                >
                  {" "}
                  Hello, I'm
                </p>
                <p className="title is-1 has-text-black is-times-newromem">
                  {" "}
                  HIMASHA
                  <br />
                  SENARATHNE
                </p>
                <p
                  className="title is-3 has-text-black mr-0 pt-4"
                  style={{
                    fontFamily:
                      'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                  }}
                >
                  FREELANCER
                </p>
                <p
                  className="title is-4 has-text-black mr=0 pt-4"
                  style={{
                    fontFamily:
                      '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
                  }}
                >
                  I am a content writing specialist. I have been
                  <br />
                  working here for 2 years and attending
                  <br />
                  every project with full satisfaction of the
                  <br />
                  clients and customers as well.
                </p>
                <p
                  className="title has-text-black mr-0 pt-6"
                  style={{
                    fontFamily:
                      '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                  }}
                >
                  <a href="2021IS085-CV (2).pdf">Download CV--&gt;</a>
                </p>
                <div className="columns">
                  <div className="column">
                    <div
                      className="icon is-large fas fa-3x"
                      style={{ position: "absolute", right: "600px" }}
                    >
                      <i className="fa-brands fa-facebook" />
                    </div>
                  </div>
                  <div
                    className="column"
                    style={{ position: "absolute", right: "450px" }}
                  >
                    <div className="icon is-large fas fa-3x">
                      <i className="fa-brands fa-linkedin" />
                    </div>
                  </div>
                  <div
                    className="column"
                    style={{ position: "absolute", right: "300px" }}
                  >
                    <div className="icon is-large fas fa-3x">
                      <i className="fa-brands fa-twitter" />
                    </div>
                  </div>
                  <div className="column">
                    <div
                      className="icon is-large fas fa-3x"
                      style={{ position: "absolute", right: "200px" }}
                    >
                      <i className="fa-brands fa-square-instagram" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <img src="himasha.svg" />
                <div className="column is-8 left column"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
