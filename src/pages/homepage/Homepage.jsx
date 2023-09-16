import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="container my-5">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <img src="images/logo.png" alt="logo" className="bi mt-2 " width="250" height="250"/>
          <h1 className="display-5 fw-bold py-3">Bored Tunnelers</h1>
          <p className="col-lg-8 mx-auto fs-5 text-muted lh-lg">
          Redefining the future of tunneling technology as 
          the first ever team from Bangladesh participating 
          in Elon Musk's Not-a-Boring competition 2024.
          We are a dynamic team of tunneling enthusiasts 
          who are passionate about pushing the boundaries 
          of what's possible underground. With a shared 
          dedication to innovation, expertise, and teamwork, 
          we are committed to revolutionizing the tunneling 
          industry and making a lasting impact.
          </p>
          {/* <div className="d-inline-flex gap-2 mb-5">
            <button
              className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
              type="button"
            >
              Call to action
            </button>
            <button
              className="btn btn-outline-secondary btn-lg px-4 rounded-pill"
              type="button"
            >
              Secondary link
            </button>
          </div> */}
        </div>
      </div>

      <div className="b-example-divider"></div>

      <div className="my-5">
        <div className="p-5 text-center bg-body-tertiary">
          <div className="container py-5">
            <h1 className="text-body-emphasis">Our Team</h1>
            {/* <h1 className="display-5 fw-bold py-3">Our Team</h1> */}
            <p className="col-lg-8 mx-auto lead lh-lg">
            Our diverse team brings together talented engineers, architects, geologists, and tunneling experts who have honed their skills through years of experience. Together, we possess a deep understanding of underground construction, drilling technologies, and sustainable tunneling methods.
            </p>
            <Link to="/team">
              <button className="btn btn-outline-secondary px-5 mb-5" type="button">
                Team Members
              </button>
            </Link>
            
          </div>
        </div>
      </div>

      <div className="b-example-divider"></div>

      <div className="container my-5">
        <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
          <button
            type="button"
            className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill"
            aria-label="Close"
          ></button>
          <img src="images/logo.png" alt="logo" className="bi mt-2 mb-5" width="250" height="250"/>
          <h1 className="text-body-emphasis">Placeholder jumbotron</h1>
          <p className="col-lg-6 mx-auto mb-4">
            This faded back jumbotron is useful for placeholder content. It's
            also a great way to add a bit of context to a page or section when
            no content is available and to encourage visitors to take a specific
            action.
          </p>
          <button className="btn btn-primary px-5 mb-5" type="button">
            Call to action
          </button>
        </div>
      </div>

      <div className="b-example-divider"></div>

      <div className="container my-5">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <h1 className="text-body-emphasis">Basic jumbotron</h1>
          <p className="lead">
            This is a simple Bootstrap jumbotron that sits within a
            <code>.container</code>, recreated with built-in utility classNamees.
          </p>
        </div>
      </div>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Custom jumbotron</h1>
            <p className="col-md-8 fs-4">
              Using a series of utilities, you can create this jumbotron, just
              like the one in previous versions of Bootstrap. Check out the
              examples below for how you can remix and restyle it to your
              liking.
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              Example button
            </button>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-bg-dark rounded-3">
              <h2>Change the background</h2>
              <p>
                Swap the background-color utility and add a `.text-*` color
                utility to mix up the jumbotron look. Then, mix and match with
                additional component themes and more.
              </p>
              <button className="btn btn-outline-light" type="button">
                Example button
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-body-tertiary border rounded-3">
              <h2>Add borders</h2>
              <p>
                Or, keep it light and add a border for some added definition to
                the boundaries of your content. Be sure to look under the hood
                at the source HTML here as we've adjusted the alignment and
                sizing of both column's content for equal-height.
              </p>
              <button className="btn btn-outline-secondary" type="button">
                Example button
              </button>
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-body-secondary border-top">
          &copy; 2023
        </footer>
      </div>
    </>
  );
};

export default Homepage;
