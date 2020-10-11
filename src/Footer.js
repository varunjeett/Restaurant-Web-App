import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import footer__logo from "./Media/footer__logo.png";

function Footer() {
  const e1 = "prabhjotlamba2001@gmail.com";
  const n1 = "8882717172";
  const e2 = "abhijeetvarun@gmail.com";
  const n2 = "8851785099";
  const e3 = "sumitsaurabh9868@gmail.com";
  const n3 = "9871464772";

  return (
    <div className="footer">
      <div className="footer__logo">
        <Link to="/">
          <img className="logo" src={footer__logo} alt="logo" />
        </Link>
      </div>

      <div className="footer__contact">
        <h3>Developed By</h3>

        <div className="footer__contact__details">
          <div className="footer__contact__individual">
            <h5>
              Prabhjot Singh
              <br />
              <a
                className={"contact__link__footer"}
                href={`mailto: ${e1}`}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                {e1}
              </a>
              <br />
              <a className={"contact__link__footer"} href={`tel: ${n1}`}>
                {n1}
              </a>
              <br />
            </h5>
          </div>

          <div className="footer__contact__individual">
            <h5>
              Abhijeet Varun
              <br />
              <a
                className={"contact__link__footer"}
                href={`mailto: ${e2}`}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                {e2}
              </a>
              <br />
              <a className={"contact__link__footer"} href={`tel: ${n2}`}>
                {n2}
              </a>
              <br />
            </h5>
          </div>

          <div className="footer__contact__individual">
            <h5>
              Sumit Saurabh
              <br />
              <a
                className={"contact__link__footer"}
                href={`mailto: ${e3}`}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                {e3}
              </a>
              <br />
              <a className={"contact__link__footer"} href={`tel: ${n3}`}>
                {n3}
              </a>
              <br />
            </h5>
          </div>
        </div>
      </div>

      <div className="footer__icons"></div>
    </div>
  );
}

export default Footer;
