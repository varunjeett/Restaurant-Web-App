import React from "react";
import { db } from "./firebase";
import "./Booking.css";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import { saveAs } from "file-saver";

const Booking = () => (
  <Formik
    initialValues={{
      name: "",
      number: "",
      email: "",
      date: "",
      time: "",
      check: "",
    }}
    onSubmit={(values, { resetForm }) => {
      
      if (values.check==true) {
        alert("Trying to print");
        axios
          .post("/create-pdf", values)
          .then(() => axios.get("fetch-pdf", { responseType: "blob" }))
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: "application/pdf" });
            saveAs(pdfBlob, "newPdf.pdf");
          });
      }

      db.collection("Bookings")
        .add({
          name: values.name,
          number: values.number,
          email: values.email,
          time: values.time,
          date: values.date,
          timestamp: new Date().getTime(),
        })
        .then(alert("Booking Done, We'll Be Waiting For You !!!"))
        .catch((error) => {
          alert(error.message);
        });

      resetForm({ values: "" });
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email(),
      number: Yup.string()
        .required("Number is required")
        .length(10, "Length should be equal to 10"),
      date: Yup.string().required("Date is required"),
      time: Yup.string().required("Arrival Time is required"),
    })}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;

      return (
        <div className="booking">
          <div className="booking__box">
            <div className="booking__img">
              <h2>Let us serve you better</h2>
            </div>
            <div className="booking__form">
              <form onSubmit={handleSubmit} className="booking__table">
                <div className="inputform">
                  <label htmlFor="name">Name:</label>
                  <input
                    name="name"
                    type="text"
                    value={values.name}
                    placeholder=" Enter your Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name && (
                    <div className="input-feedback">*{errors.name}</div>
                  )}
                </div>

                <div className="inputform">
                  <label htmlFor="email">Email (Optional):</label>
                  <input
                    name="email"
                    type="email"
                    value={values.email}
                    placeholder=" Enter your Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">*{errors.email}</div>
                  )}
                </div>

                <div className="inputform">
                  <label htmlFor="number">Contact No.:</label>
                  <input
                    name="number"
                    type="tel"
                    value={values.number}
                    placeholder=" Enter your Contact No."
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.number && touched.number && (
                    <div className="input-feedback">*{errors.number}</div>
                  )}
                </div>

                <div className="inputform">
                  <label htmlFor="date">Booking Date:</label>
                  <input
                    name="date"
                    type="text"
                    value={values.date}
                    placeholder=" Format : Date/Month"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.date && touched.date && (
                    <div className="input-feedback">*{errors.date}</div>
                  )}
                </div>

                <div className="inputform">
                  <label htmlFor="time">Arrival Time:</label>
                  <input
                    name="time"
                    type="text"
                    value={values.time}
                    placeholder=" Format : Hour/Min AM/PM"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.time && touched.time && (
                    <div className="input-feedback">*{errors.time}</div>
                  )}
                </div>

                <div className="input form">
                  <input
                    type="checkbox"
                    value={values.check}
                    onChange={() => {
                      values.check = true;
                    }}
                    onBlur={handleBlur}
                  />
                  Download Booking Receipt
                </div>

                <input
                  className="booking__button"
                  type="submit"
                  onClick={handleSubmit}
                />
              </form>
            </div>
          </div>
        </div>
      );
    }}
  </Formik>
);

export default Booking;
