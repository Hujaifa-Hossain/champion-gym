import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/AllService.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const serviceDetials = details?.find((service) => service.id === serviceId);

  return (
    <div className="text-center w-50 mx-auto">
      <div className="card">
        <img src={serviceDetials?.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3>{serviceDetials?.name}</h3>
          <p className="card-text">
            {serviceDetials?.description}
          </p>
          <p>Subscription ${serviceDetials?.price}/ month</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
