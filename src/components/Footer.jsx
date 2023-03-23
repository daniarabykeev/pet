import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-1">
          <h3>Send us email</h3>
          <div>
            <input placeholder="Your Email" type="text" />
            <button>send</button>
          </div>
        </div>
        <div className="footer-top-2">
          <img
            src="https://images.unsplash.com/photo-1627389955611-70c92a5d2e2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHRyYW5zcGFyZW50JTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60"
            alt=""
          />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-1">
          <h4>Make the right data-driven decision that move your business</h4>
        </div>
        <div className="footer-bottom-2">
          <div>
            <p>About</p>
            <p>Jobs</p>
            <p>Docs</p>
          </div>
          <div>
            <p>Terms and Conditions</p>
            <p>Privacy policy</p>
            <p>Cookie policy</p>
          </div>
          <div>
            <p>Let's chat!</p>
            <p>hi@gmail.com</p>
            <div>icon icon icon icon</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
