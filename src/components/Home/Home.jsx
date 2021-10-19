import React from "react";
import { Link } from "react-router-dom";
import AllService from "../AllService/AllService";

const Home = () => {
  return (
    <div>
      <div className="card bg-dark">
        <img className="img-fluid"
          src="https://t4.ftcdn.net/jpg/01/84/63/09/360_F_184630923_GF9S3Yz4XydO3ZDjBBslhq6Q5pdLeIKk.jpg"
          alt="..."
        />
         <div className="card-img-overlay d-flex justify-content-end align-items-center text-white">
          <div>
            <h1>REACH YOUR GOAL <br /> AT CHAMPION GYM</h1>
            <p>DO OR DIE, TODAY IS YOUR DAY</p>
            <Link to="/services"><button className="btn btn-dark">See Our All Courses</button></Link>
            
          </div>
        </div>
      </div>
      <div class="container overflow-hidden my-5">
        <div class="row gx-5">
          <div class="col-lg-6">
            <div class="my-5 mx-1">
              <h3>OUR PHILOSOPHY</h3>
              <p>
                as summarised in our philosophy and mission statement we believe
                that the potential to achieve any desired health and fitness
                goal lies within each and every one. do or die.💪
              </p>
              <Link to="/about">
                <button className="btn btn-dark text-white">
                  More About Us
                </button>
              </Link>
            </div>
          </div>
          <div class="col-lg-6">
            <div>
              <img
                className="img-fluid rounded"
                src="https://i.pinimg.com/originals/c1/84/9b/c1849b8240c02b38c01d2894f8ab8f91.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <AllService></AllService>

      <div class="container overflow-hidden my-5">
        <h2 className="my-3">What Customar Say</h2>
        <div class="row gx-5">
          <div class="col-lg-4">
            <div>
              <img className="img-fluid rounded-circle" src="https://a6e8z9v6.stackpathcdn.com/zyth/gym/wp-content/uploads/sites/2/2021/09/P17.jpg" alt="" />
            </div>
          </div>
          <div class="col-lg-8">
            <div class="p-3 bg-light">
              <p>This place is fun and challenging and really convenient as you can go to different classes, rather than having to commit to a specific day and time. The teachers are really friendly and they all have their own style of teaching. 👍 🤩 </p>
              <h6>Hujaifa Hossain</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
