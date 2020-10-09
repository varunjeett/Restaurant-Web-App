import React from "react";
import "./Review.css";
import { db } from "./firebase";
import * as Yup from "yup";
import { Formik } from "formik";

const Review = () => (
  
  <Formik
    initialValues={{ name: "", number: "", email: "", fb: "" }}
    
    onSubmit={(values, { resetForm }) => {
      db.collection("Reviews")
        .add({
          name: values.name,
          number: values.number,
          email: values.email,
          fb: values.fb,
          timestamp: new Date().getTime(),
        })
        .then(alert("Your Feedback is Valuable For Us !!!"))
        .catch((error) => {
          alert(error.message);
        });
      resetForm({ values: "" });
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email(),
      number: Yup.string().length(10, "Length should be equal to 10"),
      fb: Yup.string().required("Feedback is required"),
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
        <div className="review">
          <div className="review__cantainor">
            
            <div className="review__heading">
              <h1> Your Experience </h1>
            </div>

            <div className="review__form">
              <form onSubmit={handleSubmit} className="review__inner__form">
                
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
                  <label htmlFor="number">Contact No. (Optional):</label>
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
                  <label htmlFor="fb">Feedback:</label>
                  <input
                    name="fb"
                    type="text"
                    value={values.fb}
                    placeholder=" Type Here"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.fb && touched.fb && (
                    <div className="input-feedback">*{errors.fb}</div>
                  )}
                </div>
              </form>
            </div>
            
            <input
              className="review__button"
              type="submit"
              onClick={handleSubmit}
            />

          </div>
        </div>
      );
    }}
  </Formik>
);

export default Review;
