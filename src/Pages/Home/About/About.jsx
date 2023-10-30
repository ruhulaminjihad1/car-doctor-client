import person from "../../../assets/images/about_us/person.jpg";

import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="w-1/2 absolute rounded-lg shadow-2xl right-5 top-1/2 border-white border-8"
            />
          </div>
          <div className="lg:1/2">
            <h1 className="text-xl text-orange-700 font-bold">About Us</h1>
            <h2 className="text-4xl">
              We are qualified & of experience in this field
            </h2>
            <p className="py-6  ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <p className="py-6  ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-secondary ">Get More info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
