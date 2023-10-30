import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { _id, img, price, title } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title} </h2>
          <p className="card-title">{price}</p>
          <div className="card-actions justify-end">
            <Link to={`/book/${_id}`}>
              <button className="btn btn-primary">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
