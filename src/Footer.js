import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import footer__logo from './Media/footer__logo.png'

function Footer() {
    return (
        <div className="footer">

            <div className="footer__logo">
                <Link to="/" >
                    <img className="logo" src={footer__logo} alt="logo" />
                </Link>
            </div>

            <div className="footer__contact">

                <h3>Developed By</h3>

                <div className="footer__contact__details">

                    <div className="footer__contact__individual">

                        <h5>
                            Prabhjot Singh<br />
                            prabhjotlamba2001@gmail.com<br />
                            8882717172<br />
                        </h5>

                    </div>

                    <div className="footer__contact__individual">
                        <h5>
                            Abhijeet Varun<br />
                            abhijeetvarun@gmail.com<br />
                            8851785099<br />
                        </h5>
                    </div>

                    <div className="footer__contact__individual">

                        <h5>
                            Sumit Saurabh<br />
                            sumitsaurabh9868@gmail.com<br />
                            9871464772<br />
                        </h5>

                    </div>

                </div>

            </div>


            <div className="footer__icons">

            </div>


        </div>
    )
}

export default Footer
