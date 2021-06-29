import React from "react";
import { useStateValue } from "./StateProvider";
import Pdf from "react-to-pdf";
import logo from "./Media/footer__logo.png";
import "./Pdfprint.css";

const ref = React.createRef();

function Pdfprint() {
  const [{ id, name, contact, arrivalTime, bookingDate }] = useStateValue();
  return (
    <div className="Pdfprint">
      <div className="printMessage">
      <h1>Hello User, Your Booking is Confirmed</h1>
      <h1>Download your Receipt by clicking on the Button below</h1>
      </div>

      <div className="receipt" ref={ref}>
        <img src={logo} alt="logo of BOL" />
        <div className="pdftext">
          <p>{id}</p>
          <p>{name}</p>
          <p>{contact}</p>
          <p>{arrivalTime}</p>
          <p>{bookingDate}</p>
        </div>
        
      </div>

      <Pdf targetRef={ref} filename="booking.pdf">
        {({ toPdf }) => <button className="pdf__button" onClick={toPdf}>Download your receipt</button>}
      </Pdf>
    </div>
  );
}

export default Pdfprint;
