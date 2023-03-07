import React from "react";

function Exp() {
  return (
    <section className="is-large" style={{ padding: "2px" }}>
      <div
        className="body"
        style={{ padding: "400px", backgroundColor: "#F0EBEB" }}
      >
        <div className="Experience">
          <p
            className="title is-3 has-text-black mr-0 pt-2"
            style={{
              fontFamily:
                'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
              position: "absolute",
              top: "2500px",
              left: "70px",
              fontSize: "60px",
            }}
          >
            Experience
          </p>
        </div>
        <section
          className="section is-large has-text-black"
          style={{
            position: "absolute",
            top: "2330px",
            left: "190px",
            fontSize: "40px",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
          }}
        >
          <h2 className>
            Creating research-based content for online and in print <br />
            platforms since 2018.
          </h2>
          <section className="hero is-medium is-link">
            <div
              className="hero-body"
              style={{ backgroundColor: "rgb(250, 218, 222)" }}
            >
              <p
                className=" title is-3 has-text-black mr-1 pt-1"
                style={{
                  fontFamily:
                    'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                  position: "absolute",
                  top: "400px",
                  left: "190px",
                  fontSize: "60px",
                }}
              >
                Contact me,
                <br />
              </p>
              <p className="subtitle"></p>
            </div>
          </section>
          <p className="icon">
            <i
              className="fa-sharp fa-solid fa-location-dot"
              style={{
                position: "absolute",
                top: "480px",
                left: "250px",
                color: "red",
              }}
            />
          </p>
          <p style={{ position: "absolute", top: "480px", left: "350px" }}>
            Anuradhapura,Sri lanka
          </p>
          <br />
          <i
            className="fa-solid fa-envelope"
            style={{
              position: "absolute",
              top: "530px",
              left: "250px",
              color: "red",
            }}
          />
          <p style={{ position: "absolute", top: "530px", left: "350px" }}>
            <u>himaasha@gmail.com</u>
          </p>
          <br />
          <i
            className="fa-sharp fa-solid fa-phone"
            style={{
              position: "absolute",
              top: "590px",
              left: "250px",
              color: "red",
            }}
          />
          <p style={{ position: "absolute", top: "590px", left: "350px" }}>
            +94 675 654 729
          </p>
          <p />
        </section>
      </div>
    </section>
  );
}

export default Exp;
