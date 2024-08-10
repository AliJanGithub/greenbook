import React, { useEffect, useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import '../src/App.css'
import { Formik, Field, Form , ErrorMessage} from "formik";
import {LoginSchema} from '../Schemas/LoginSchema';
// import signUpApi from '../api/signUpApi';
import signInApi from '../api/signInApi';
import {useUser} from '../contextAPI/userContext'

export default function SignUpScreen() {
  const navigate = useNavigate();
  const {setUser, setIsLoggedIn} = useUser();

  const [forgetPassword, setForgetPassword] = useState(false);

    const initialValues = { 
        name: "", 
        email: "", 
        password: ""
      };

      const onSubmit = async (values, { setSubmitting }) => {
        console.log('Form data', values);
        signInApi("http://localhost:8000/users/signin", {email:values.email, password:values.password}, setUser, setIsLoggedIn)
        .then((res) => {
            if (res == "Invalid password"){
              setForgetPassword(true)
            }
            else{
              let token = res.user.token;
              setForgetPassword(false);
              localStorage.setItem('token', token);
              navigate("/profile", { state: { token , res} })
            }
        })
        setSubmitting(false)
        
      };
    
  return (
    <div className='details-container'>
        <div className="form">
            <div className='form-img'>
                <img src="https://thechildrengreenbook.net/assets/images/_logo.png" alt="" />
            </div>

            <Formik
              initialValues={initialValues}
              validationSchema={LoginSchema}
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

                <button type="submit" >Login</button>
                {forgetPassword && (
                  <div htmlFor='forgetpassword'>
                      <Link to={'/order'} > Forget Password </Link>
                    <h1>forget password</h1>
                  </div>
                )}
              </Form>
            </Formik>
        </div>
    </div>
  )
}
