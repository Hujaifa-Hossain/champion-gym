import React from 'react';
import { Link } from 'react-router-dom';
import AllService from '../AllService/AllService';

const Home = () => {
  return (
    <div>
      <div className="card bg-dark text-white ">
        <img
          src="https://image.freepik.com/free-photo/young-healthy-man-athlete-posing-confident-with-ropes-gym_155003-32053.jpg"
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay d-flex justify-content-start align-items-center ">
          <div>
            <h1>REACH YOUR GOAL <br /> AT CHAMPION GYM</h1>
            <p>DO OR DIE, TODAY IS YOUR DAY</p>
            <Link to="/services"><button className="btn btn-dark">See Our All Courses</button></Link>
            
          </div>
        </div>
      </div>

      <AllService></AllService>
    </div>
  );
};

export default Home;