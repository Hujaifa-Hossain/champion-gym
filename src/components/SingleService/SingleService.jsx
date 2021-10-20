import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleService = (props) => {
  const { id, name, img, description } = props.service;
  return (
    <div>
      <div className="card mb-3 bg-dark border-light">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              <Link to={`/service/${id}`}>
                <button className="btn btn-info">
                  <FontAwesomeIcon icon={faBookReader} /> See Details
                </button>
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
