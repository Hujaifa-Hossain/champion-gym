import { useEffect, useState } from "react";
import SingleService from "../SingleService/SingleService";
import './AllService.css'

const AllService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('/AllService.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className="bg-dark text-white py-3">
      <h3 className="text-center my-3">Our All Courses</h3>
      <div className="service-container container">
        {
          services.map(service => <SingleService key={service.id} service={service}></SingleService>)
        }
      </div>
    </div>
  );
};

export default AllService;