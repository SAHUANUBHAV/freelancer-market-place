import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
          Discover the ideal freelance services for your business.
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "building LOGO"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Graphics & Design</button>
            <button>Photography</button>
            <button>Logo Design</button>
            <button>Music & Audio</button>
          </div>
        </div>
        <div className="right">
          <img src="https://www.seekpng.com/png/full/1010-10106302_virat-kohli-rcb-png.png" alt="ANUBHAV" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
