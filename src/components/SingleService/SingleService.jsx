import React from "react";
import { Link } from "react-router-dom";

const SingleService = (props) => {
  const {id, name, img, description } = props.service;
  return (
    <div>
      <div className="card text-white">
        <img src={img} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><Link to={`/service/${id}`}><button className="btn btn-dark">See More</button></Link></p>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
