import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Review.css";
import InputField from "./InputField";
import { db } from "./firebase.js";

const Review = () => {
  const history = useHistory(); 
  const inputRefs1 = React.useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const [data1, setData1] = useState({});
  const handleChange = (name, value) => {
    setData1((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm2 = (e) => {
    e.preventDefault();

    let isValid = true;
    for (let i = 0; i < inputRefs1.current.length; i++) {
      const valid = inputRefs1.current[i].current.validate();
      console.log(valid);
      if (!valid) {
        isValid = false;
      }
    }

    if (!isValid) {
      return;
    }


    // console.log(data1.name);
    // console.log(data1.contact);
    // console.log(data1.email);
    // console.log(data1.feedback);

    db.collection("Reviews")
      .add({
        name: data1.name,
        contact: data1.contact,
        email:data1.email,
        feedback: data1.feedback,
        timestamp: new Date().getTime(),
      })
      .then(history.replace("/"))
      .catch((error) => {
        alert(error.message);
      });

      
  };

  return (
    <div className="review">
      <div className="review_fields">
        <form onSubmit={submitForm2} className="review__form">
          <h1>Review </h1>

          <InputField
            ref={inputRefs1.current[0]}
            name="name"
            type="text"
            label="Name*:"
            onChange={handleChange}
            validation={"required"}
            placeholder=" Enter your Name"
          />

          <InputField
            ref={inputRefs1.current[1]}
            name="email"
            type="email"
            label="Email:"
            onChange={handleChange}
            validation={"invalid"}
            placeholder=" Enter your Email"
          />

          <InputField
            ref={inputRefs1.current[2]}
            name="contact"
            type="text"
            label="Contact:"
            validation={"invalid"}
            onChange={handleChange}
            placeholder=" Enter your Contact No."
          />

          <InputField
            ref={inputRefs1.current[3]}
            name="feedback"
            type="text"
            label="Feedback*:"
            validation="required"
            onChange={handleChange}
            placeholder=" Feedback"
          />

          <label className="booking__caution">* mandatory fields</label>
          <button className="review__button" type="submit">
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};
export default Review;


//   <Formik
//     initialValues={{ name: "", number: "", email: "", fb: "" }}

//     onSubmit={(values, { resetForm }) => {
//       db.collection("Reviews")
//         .add({
//           name: values.name,
//           number: values.number,
//           email: values.email,
//           fb: values.fb,
//           timestamp: new Date().getTime(),
//         })
//         .then(alert("Your Feedback is Valuable For Us !!!"))
//         .catch((error) => {
//           alert(error.message);
//         });
//       resetForm({ values: "" });
//     }}
//     validationSchema={Yup.object().shape({
//       name: Yup.string().required("Name is required"),
//       email: Yup.string().email(),
//       number: Yup.string().length(10, "Length should be equal to 10"),
//       fb: Yup.string().required("Feedback is required"),
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

//       return (
//         <div className="review">
//           <div className="review__cantainor">

//             <div className="review__heading">

//               <h1> Your Experience </h1>
//             </div>

//             <div className="review__form">
//               <form onSubmit={handleSubmit} className="review__inner__form">

//                 <div className="inputform">
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
//                     <div className="input-feedback">*{errors.name}</div>
//                   )}
//                 </div>

//                 <div className="inputform">
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
//                     <div className="input-feedback">*{errors.email}</div>
//                   )}
//                 </div>

//                 <div className="inputform">
//                   <label htmlFor="number">Contact No. (Optional):</label>
//                   <input
//                     name="number"
//                     type="tel"
//                     value={values.number}
//                     placeholder=" Enter your Contact No."
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />
//                   {errors.number && touched.number && (
//                     <div className="input-feedback">*{errors.number}</div>
//                   )}
//                 </div>

//                 <div className="inputform">
//                   <label htmlFor="fb">Feedback:</label>
//                   <input
//                     name="fb"
//                     type="text"
//                     value={values.fb}
//                     placeholder=" Type Here"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />
//                   {errors.fb && touched.fb && (
//                     <div className="input-feedback">*{errors.fb}</div>
//                   )}
//                 </div>
//               </form>
//             </div>

//             <input
//               className="review__button"
//               type="submit"
//               onClick={handleSubmit}
//             />

//           </div>
//         </div>
//       );
//     }}
//   </Formik>
// );
