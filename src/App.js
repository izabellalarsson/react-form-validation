import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { userSchema } from "./Validations/UserValidation";
import "./App.css";

function App() {
  const [formData, setFormdata] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <div className="App">
      <h1>Formik and Yup</h1>
      <Formik
        initialValues={formData}
        validationSchema={userSchema}
        onSubmit={(values) => {
          setFormdata(values);
        }}
      >
        <Form>
          <Field name="firstName" type="text" placeholder="first name" />
          <ErrorMessage name="firstName" />
          <Field name="lastName" type="text" placeholder="last name" />
          <ErrorMessage name="lastName" />
          <Field name="email" type="text" placeholder="email" />
          <ErrorMessage name="email" />
          <Field name="password" type="text" placeholder="password" />
          <ErrorMessage name="password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
