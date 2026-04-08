import React from "react";
import HeroImg from "../../assets/hero_img.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col bg-gray-200 lg:flex-row-reverse p-14 rounded-lg">
        <img src={HeroImg} className="rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-success text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
