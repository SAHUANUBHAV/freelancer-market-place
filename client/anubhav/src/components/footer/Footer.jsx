import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Photography</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Terms of Service</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on SVAAA</span>
            <span>Buying on SVAAA</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
          </div>
          <div className="item">
            <h2>More From SVAAA</h2>
            <span>SVAAA Pro</span>
            <span>SVAAA Logo Maker</span>
            <span>SVAAA Guides</span>
            <span>ClearVoice</span>
            <span>SVAAA Workspace</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>SVAAA</h2>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
