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
      <h1>Hello User, Your Booking is Confirmed</h1>
      <h1>Download your Receipt by clicking on the Button below</h1>

      <div className="receipt" ref={ref}>
        <img src={logo} alt="logo of BOL" />
        <h1>{id}</h1>

        <h1>{name}</h1>

        <h1>{contact}</h1>

        <h1>{arrivalTime}</h1>

        <h1>{bookingDate}</h1>
      </div>

      <Pdf targetRef={ref} filename="booking.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Download your receipt</button>}
      </Pdf>
    </div>
  );
}

export default Pdfprint;
