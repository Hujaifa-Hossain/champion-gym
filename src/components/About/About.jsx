import React from "react";

const About = () => {
  return (
    <div>
      <div className="bg-dark vh-100 text-white d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1>About Us</h1>
          <p>Know the story about us</p>
        </div>
      </div>
      <div className="container my-4 row">
        <h2 className="col-lg-5 my-3">We Help Enhance Your Workout</h2>
        <div className="col-lg-7">
          <p>
            As a multi-faceted fitness and health company which is encompassed
            by the talents of many diversely skilled professionals, we have
            sought to establish a set of mutually agreed core values to help
            underpin the success of our overall mission and ensuing philosophy.
          </p>
          <p>
            It is these values which every new client will see come to life when
            their training journey begins, as they drive us as trainers each day
            to achieve the positive results that everyone we work with desires.
          </p>
        </div>
      </div>
      <div>
        <img
          className="img-fluid w-100"
          src="https://img.freepik.com/free-vector/gym-fitness-elements-set_1284-39992.jpg?size=338&ext=jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
