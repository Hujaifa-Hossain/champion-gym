import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const { serviceId } = useParams()

    // console.log(serviceId)

    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch("/AllService.json")
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const serviceDetials = details?.find(service => service.id === serviceId);
    console.log(serviceDetials)

  return (
    <div>
      {serviceDetials?.title}
    </div>
  );
};

export default ServiceDetail;