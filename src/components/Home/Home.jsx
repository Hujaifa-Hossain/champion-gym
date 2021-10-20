import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookReader} from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";
import AllService from "../AllService/AllService";

const Home = () => {
  return (
    <div className="bg-dark text-white">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://image.freepik.com/free-photo/muscular-sportsman-building-biceps-with-dumbbell_7502-4784.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Champion Gym</h5>
              <p>Do or die, This is your day, No pain No gain.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://image.freepik.com/free-photo/young-healthy-man-athlete-doing-exercises-pull-ups-gym_155003-35469.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Champion Gym</h5>
              <p>Do or die, This is your day, No pain No gain.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://image.freepik.com/free-photo/muscular-man-doing-push-ups-one-hand_7502-4775.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Champion Gym</h5>
              <p>Do or die, This is your day, No pain No gain.</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <AllService></AllService>

      <div className="container-fluid overflow-hidden my-5 bg-dark text-white">
        <div className="row gx-4">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="m-3">
              <h3>OUR PHILOSOPHY</h3>
              <p>
                as summarised in our philosophy and mission statement we believe
                that the potential to achieve any desired health and fitness
                goal lies within each and every one. do or die.💪
              </p>
              <Link to="/about">
                <button className="btn btn-warning">
                <FontAwesomeIcon icon={faBookReader} /> More About Us</button>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
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

      <div className="container-fluid overflow-hidden mt-5">
        <h2 className="my-3 text-center">What Client Say</h2>
        <div className="row gx-5">
          <div className="col-lg-3">
            <div>
              <img
                className="img-fluid rounded-circle"
                src="https://a6e8z9v6.stackpathcdn.com/zyth/gym/wp-content/uploads/sites/2/2021/09/P17.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-9">
            <div className="p-3 bg-dark text-white my-3">
              <p>
                This place is fun and challenging and really convenient as you
                can go to different classes, rather than having to commit to a
                specific day and time. The teachers are really friendly and they
                all have their own style of teaching. 👍 🤩{" "}
              </p>
              <h5>Hujaifa Hossain</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
