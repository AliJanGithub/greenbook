import React from 'react'
import '../src/App.css'
import { Formik, Field, Form , ErrorMessage} from "formik";
import { SignInSchema } from '../Schemas/SignInSchema';
import signUpApi from '../api/signUpApi';
import { useNavigate } from 'react-router-dom';

export default function SignUpScreen() {
  const navigate = useNavigate();

    const initialValues = { 
        name: "", 
        email: "", 
        password: "", 
        confirmPassword: "",
        acceptTerms: false
      };

    const onSubmit = (values, { setSubmitting }) => {
        console.log('Form data', values);
        signUpApi("http://localhost:8000/users/signup", {name:values.name, email:values.email, password:values.password})
        setSubmitting(false);
        navigate("/login")
      };
    
  return (
    <div className='details-container'>
        <div className="form">
            <div className='form-img'>
                <img src="https://thechildrengreenbook.net/assets/images/_logo.png" alt="" />
            </div>

            <Formik
              initialValues={initialValues}
              validationSchema={SignInSchema}
              onSubmit={onSubmit}
            >
              <Form>
                  <div className='input-container'>
                      <label htmlFor="name">Name</label>
                      <Field className="input-field" name="name" type="text" />
                      <ErrorMessage className='error' name="name" component="div" />
                      {/* error message */}
                  </div>

                  <div className='input-container'>
                      <label htmlFor="email">Email</label>
                      <Field className="input-field" name="email" type="email" />
                      <ErrorMessage className='error' name="email" component="div" />
                      {/* error message */}
                  </div>

                  <div className='input-container'>
                      <label htmlFor="password">Password</label>
                      <Field className="input-field" name="password" type="password" />
                      <ErrorMessage className='error' name="password" component="div" />
                      {/* error message */}
                  </div>

                  <div className='input-container'>
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <Field className="input-field" name="confirmPassword" type="password" />
                      <ErrorMessage className='error' name="confirmPassword" component="div" />
                      {/* error message */}
                  </div>

                  <div className="checkbox-field">
                      <label>
                        <Field name="acceptTerms" type="checkbox"  />
                        <span>Accept Terms & Conditions</span> 
                      </label>
                      <ErrorMessage name="acceptTerms" component="div" className="error-message" />
                  </div>

                <button type="submit" >Create An Account</button>
              </Form>
            </Formik>
        </div>
    </div>
  )
}
