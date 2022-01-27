import React from "react";
import contcatImg from "../img/contact1.jpg";

const Services = () => {
  return (
    <div>
      <section id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Our Services</h3>
              <h1 className="display-6 text-center mb-4">
                Our <b>Awesome</b> Services
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div class="card p-3 border-0">
                <img src={contcatImg} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                  <h5 class="card-title mb-3 fs-4fw-bold">Mehboob Sb</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3 border-0">
                <img src={contcatImg} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                  <h5 class="card-title mb-3 fs-4fw-bold">Noman Sb</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3 border-0">
                <img src={contcatImg} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                  <h5 class="card-title mb-3 fs-4fw-bold">Shahid Sb</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
