import React from "react";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { Link, NavLink } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                Best LAW ASSOCIATES
              </h1>
              <p className="lead text-capitalize text-center fs-4 mb-5 text-white">
              Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation.
              </p>
              <div className="buttons d-flex justify-content-center">
                <Link to="/contact" className="btn btn-light me-4 rounded-pill px-4 py-2">
                  Get Quote
                </Link>
                <Link to="/services" className="btn btn-outline-light rounded-pill px-4 py-2">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About/>
      <Services/>
      <Contact/>
    </div>
  );
};

export default Home;
