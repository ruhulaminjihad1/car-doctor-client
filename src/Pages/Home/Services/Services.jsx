import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <div className="text-center">
      <h2 className="text-3xl text-orange-700">Our Services</h2>
      <h1 className="text-5xl font-semibold">Our Services Area</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam quod
        quia, tempore dolorem voluptatem alias, officia adipisci debitis ut
        corrupti itaque, quis enim minus nemo. Placeat explicabo maiores tempore
        magni hic? Sequi voluptate ducimus, nesciunt dolorem incidunt cum
        similique quia.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
