import React, { useState, useEffect } from 'react';
import Service from "./Service";
import Title from "./Title";

function Services() {
  const [servicesData, setServicesData] = useState([]);
  const apiUrl = "http://localhost:4000/api/services";

  useEffect(() => {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setServicesData(data))
      .catch(error => console.error("Error fetching services:", error));
  }, []); 

  return (
    <div>
      <section className="section services" id="services">
        <Title title="our" span="services" />
        <div className="section-center services-center">
          {servicesData.map((service) => (
            <Service key={service.id} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
