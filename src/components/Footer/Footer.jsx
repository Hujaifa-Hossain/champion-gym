import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="px-4 pt-5 pb-2 bg-dark text-white">
        <div className="row gx-5">
          <div className="col-lg-5">
            <div className="bg-light">
              <img className="w-100" src="./logo.png" height="55" alt="" />
            </div>
            <div className="my-2">
              <p>
              <i class="fas fa-map-marker-alt"></i>
                <small> Level-10, Zakir Complex, Kuril, Dhaka</small>
              </p>
              <p>
              <i class="fas fa-envelope"></i> 
                <small> Official: champgym2@gmail.com</small>
              </p>
              <p>
              <FontAwesomeIcon icon={faPhone} />
                <small> Helpline: 01890-098886</small>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div>
              <ul className="p-0 bg-dark">
                <li className="list-group-item bg-dark p-0">
                  <Link className="text-decoration-none text-white" to="/home">
                    Home
                  </Link>
                </li>
                <li className="list-group-item bg-dark p-0">
                  <Link
                    className="text-decoration-none text-white"
                    to="/services"
                  >
                    Courses
                  </Link>
                </li>
                <li className="list-group-item bg-dark p-0">
                  <Link className="text-decoration-none text-white" to="/about">
                    About
                  </Link>
                </li>
                <li className="list-group-item bg-dark  p-0">
                  <Link
                    className="text-decoration-none text-white"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="my-3">
              <i class="fab fa-facebook-f mx-1"></i>
              <i class="fab fa-instagram-square mx-1"></i>
              <i class="fab fa-twitter mx-1"></i>
              <i class="fab fa-youtube mx-1"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div>
              <img
                src="https://onlineshoppingbd.org/wp-content/uploads/2016/12/payment.png"
                alt=""
              />
            </div>
          </div>
        </div>
      <p className="text-white text-center mt-3">Copyright © 2021 Champion Gym</p>
      </div>
    </div>
  );
};

export default Footer;
