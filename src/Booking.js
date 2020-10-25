// import React from "react";
// import { db } from "./firebase";
// import "./Booking.css";
// import * as Yup from "yup";
// import { Formik } from "formik";
// import Confirmation from "./Confirmation";
// import ReactDOMServer from "react-dom/server";
// import jsPDF from "jspdf";

// const Booking = () => (
//   <Formik
//     initialValues={{
//       name: "",
//       number: "",
//       email: "",
//       date: "",
//       time: "",
//       checked:false
//     }}
//     onSubmit={(values, { resetForm }) => {
      
//       // if  checkbox is checked, AUTO DOWNLOAD the pdf of BOOKING RECEIPT
      

//       let booking={
//           name: values.name,
//           number: values.number,
//           email: values.email,
//           time: values.time,
//           date: values.date,
//           timestamp: new Date().getTime(),
//       }

//       alert(booking.name);

//       db.collection("Bookings")
//         .add(booking)
//         .then(alert("Booking Done, We'll Be Waiting For You !!!"))
//         .catch((error) => {
//           alert(error.message);
//         });

//       if(values.checked===true){
//         var doc = new jsPDF();
//         alert("hello");
//         doc.fromHTML(ReactDOMServer.renderToStaticMarkup(<Confirmation booking={booking}/>));
//         alert("world");
//         doc.save("myDocument.pdf");
//       }

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
//       checked: Yup.bool(),
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
//         setFieldValue
//       } = props;
  
//       return (
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
//                     <div className="input-feedback-booking">*{errors.name}</div>
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
//                     <div className="input-feedback-booking">*{errors.email}</div>
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
//                     <div className="input-feedback-booking">*{errors.number}</div>
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
//                     <div className="input-feedback-booking">*{errors.date}</div>
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
//                     <div className="input-feedback-booking">*{errors.time}</div>
//                   )}
//                 </div>


//                 <div className="inputform__booking">
//                   <label htmlFor="checked">Do you want soft copy of confimaration</label>
//                   <input
//                     name="checked"
//                     type="checkbox"
//                     value={values.checked}
//                     onClick={() => setFieldValue("checked", !values.checked)}
//                     onBlur={handleBlur}
//                   />
//                 </div>

//                 <input
//                   className="booking__button"
//                   type="submit"
//                   onClick={handleSubmit}
//                 />
//               </form>
//             </div>
//           </div>
//         </div>
//       );
//     }}
//   </Formik>
// );

// export default Booking;
