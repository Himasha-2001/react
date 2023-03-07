import React from "react";

function AboutMe() {
  return (
    <section className="is-large" style={{ padding: "2px" }}>
      <div
        className="-body "
        style={{ padding: "400px", backgroundColor: "#F0EBEB" }}
      >
        <div className="About">
          <p
            className="title is-3 has-text-black mr-0 pt-2"
            style={{
              fontFamily:
                'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
              position: "absolute",
              top: "900px",
              left: "70px",
              fontSize: "60px",
            }}
          >
            {" "}
            About me
          </p>
        </div>
        <section
          className="section is-large"
          style={{
            position: "absolute",
            top: "700px",
            left: "250px",
            fontSize: "35px",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
          }}
        >
          <h2 className>
            {" "}
            With more than two years of experience, I work as a,
          </h2>
        </section>
        <section
          className="section is-large"
          style={{
            position: "absolute",
            top: "750px",
            left: "190px",
            fontSize: "35px",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
          }}
        >
          <h2 className>
            freelance content writer. I'm a Colombo native. We produce
          </h2>
        </section>
        <section
          className="section is-large"
          style={{
            position: "absolute",
            top: "800px",
            left: "230px",
            fontSize: "35px",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
          }}
        >
          <h2 className>
            {" "}
            content for remarkable individuals all over the world.
          </h2>
        </section>
        <section
          className="section is-large"
          style={{
            position: "absolute",
            top: "850px",
            left: "170px",
            fontSize: "35px",
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
          }}
        >
          <h2 className>
            {" "}
            I enjoy meeting new people at work. new things, new people.
          </h2>
          <section className="hero is-medium is-link">
            <div style={{}}>
              <p
                style={{
                  fontSize: "30px",
                  position: "absolute",
                  top: "350px",
                  left: "300px",
                  backgroundColor: "gray",
                  padding: "5% 10% 5% 10%",
                  borderRadius: "300px",
                }}
              >
                Name: Himasha senarathne
                <br />
                Birthday: 30th August 2001
                <br />
                Age: 21 y/o
                <br />
                Address: Anuradhapura, Sri Lanka
                <br />
                University: University of Colombo
                <br />
                Email:himasha@gamil.com
              </p>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}

export default AboutMe;
