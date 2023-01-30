import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mb-10">
      <div className="container">
        <div className="row">
          <div className="col l3">
            <div>
              <p>
                <Link to="/">Sitemap</Link>
              </p>
              <p>
                <Link to="/">Terms & Conditions</Link>
              </p>
              <p>
                <Link to="/">Privacy Policy</Link>
              </p>
              <p>
                <Link to="/">Cookie Policy</Link>
              </p>
            </div>
          </div>
          <div className="col l3">
            <div>
              <h5>© SRINAVA 2023 Powered by SRINAVA Group</h5>
            </div>
          </div>
          <div className="col l3"></div>
          <div className="col l3">
            <div>
              <p>
                <span>Registered Address:</span>
                <span>
                  No: 357, 4th cross, AMS Layout, Vidyaranyapura, Bengaluru -
                  560097
                </span>
              </p>
              <p>
                <span>E-mail ID:</span>
                <span>info@srinava.com</span>
              </p>
              <p>
                <span>Contact Number:</span>
                <span>+91 8277683694</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
