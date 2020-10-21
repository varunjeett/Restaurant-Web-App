import React, { useState } from "react";
import { db } from "./firebase";
import "./Booking.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import InputField from "./InputField";

function Booking() {
  const [state, dispatch] = useStateValue();
  const inputRefs = React.useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const [data, setData] = useState({});
  const handleChange = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    let isValid = true;
    for (let i = 0; i < inputRefs.current.length; i++) {
      const valid = inputRefs.current[i].current.validate();
      console.log(valid);
      if (!valid) {
        isValid = false;
      }
    }

    if (!isValid) {
      return;
    }

    db.collection("Bookings")
      .add({
        name: data.name,
        contact: data.contact,
        email: data.email,
        arrivalTime: data.arrivalTime,
        bookingDate: data.bookingDate,
        timestamp: new Date().getTime(),
      })
      .then((docRef) => {
        console.log(docRef.id);
        dispatch({
          type: actionTypes.SET_BOOKING,
          id: docRef.id,
          name: data.name,
          email: data.email,
          contact: data.contact,
          arrivalTime: data.arrivalTime,
          bookingDate: data.bookingDate,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="booking">
      <div className="booking__fields">
        <form onSubmit={submitForm} className="booking__form">
          <h1>Save a Seat</h1>

          <InputField
            ref={inputRefs.current[0]}
            name="name"
            type="text"
            label="Name*:"
            onChange={handleChange}
            validation={"required"}
            placeholder=" Enter your Name"
          />

          <InputField
            ref={inputRefs.current[1]}
            name="email"
            type="email"
            label="Email:"
            onChange={handleChange}
            validation={"invalid"}
            placeholder=" Enter your Email"
          />

          <InputField
            ref={inputRefs.current[2]}
            name="contact"
            type="text"
            label="Contact*:"
            validation="required|min:10|max:10"
            onChange={handleChange}
            placeholder=" Enter your Contact No."
          />

          <InputField
            ref={inputRefs.current[3]}
            name="bookingDate"
            type="text"
            label="Booking Date*:"
            validation="required"
            onChange={handleChange}
            placeholder=" Format : Date/Month"
          />

          <InputField
            ref={inputRefs.current[4]}
            name="arrivalTime"
            type="text"
            label="Arrival time*:"
            validation="required"
            onChange={handleChange}
            placeholder=" Format : Hour/Min AM/PM"
          />

          <button className="booking__button" type="submit">Confirm</button>
          <label className="booking__caution">* mandatory fields</label>
        </form>
      </div>
    </div>
  );
}

export default Booking;

// const Booking = () => (

//   <Formik
//     initialValues={{
//       name: "",
//       number: "",
//       email: "",
//       date: "",
//       time: "",
//     }}

//     onSubmit={(values, { resetForm }) => {
//       alert("Clicked");

//       db.collection("Bookings")
//         .add({
//           name: values.name,
//           number: values.number,
//           email: values.email,
//           time: values.time,
//           date: values.date,
//           timestamp: new Date().getTime(),
//         })
//         .then((result) => {
//           alert("Booking Done");
//           alert(`${result.name}`);
//           alert(`${values.name}`);

//         })

//         .catch((error) => {
//           alert(error.message);
//         });

//       resetForm({ values: "" });
//     }}
//     validationSchema={Yup.object().shape({
//       name: Yup.string().required("Name is required"),
//       email: Yup.string().email(),
//       number: Yup.string()
//         .required("Number is required")
//         .length(10, "Length should be equal to 10"),
//       date: Yup.string().required("Date is required"),
//       time: Yup.string().required("Arrival Time is required"),
//     })}
//   >
//     {(props) => {
//       const {
//         values,
//         touched,
//         errors,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//       } = props;

//       return <> {!printit ? <>
//         <div className="booking">
//           <div className="booking__box">
//             <div className="booking__img">
//               <h1>Let us serve you better</h1>
//             </div>
//             <div className="booking__form">
//               <form onSubmit={handleSubmit} className="booking__table">
//                 <div className="inputform__booking">
//                   <label htmlFor="name">Name:</label>
//                   <input
//                     name="name"
//                     type="text"
//                     value={values.name}
//                     placeholder=" Enter your Name"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />
//                   {errors.name && touched.name && (
//                     <div className="input-feedback-booking">
//                       *{errors.name}
//                     </div>
//                   )}
//                 </div>

//                 <div className="inputform__booking">
//                   <label htmlFor="email">Email (Optional):</label>
//                   <input
//                     name="email"
//                     type="email"
//                     value={values.email}
//                     placeholder=" Enter your Email"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />
//                   {errors.email && touched.email && (
//                     <div className="input-feedback-booking">
//                       *{errors.email}
//                     </div>
//                   )}
//                 </div>

//                 <div className="inputform__booking">
//                   <label htmlFor="number">Contact No.:</label>
//                   <input
//                     name="number"
//                     type="tel"
//                     value={values.number}
//                     placeholder=" Enter your Contact No."
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />
//                   {errors.number && touched.number && (
//                     <div className="input-feedback-booking">
//                       *{errors.number}
//                     </div>
//                   )}
//                 </div>

//                 <div className="inputform__booking">
//                   <label htmlFor="date">Booking Date:</label>
//                   <input
//                     name="date"
//                     type="text"
//                     value={values.date}
//                     placeholder=" Format : Date/Month"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />
//                   {errors.date && touched.date && (
//                     <div className="input-feedback-booking">
//                       *{errors.date}
//                     </div>
//                   )}
//                 </div>

//                 <div className="inputform__booking">
//                   <label htmlFor="time">Arrival Time:</label>
//                   <input
//                     name="time"
//                     type="text"
//                     value={values.time}
//                     placeholder=" Format : Hour:Min AM/PM"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />
//                   {errors.time && touched.time && (
//                     <div className="input-feedback-booking">
//                       *{errors.time}
//                     </div>
//                   )}
//                 </div>

//                 {/* checkbox */}

//                 <input
//                   className="booking__button"
//                   type="submit"
//                   onClick={handleSubmit}
//                 />
//               </form>
//             </div>
//           </div>
//         </div>
//       </> :

//       <Pdfprint name={values.name}  email={values.email}  number={values.number}  date={values.date} time={values.time} />
//       }

//       </>;
//     }}
//   </Formik>
// );

// export default Booking;