import { ErrorMessage, Field, Form, Formik } from 'formik';
import React , {useEffect, useState} from 'react';
import {ChangePasswordSchema} from '../Schemas/ChangePasswordSchema'
import updateApi from '../api/updateApi';
import getAUserApi from '../api/getAUserApi'
import verifyEmail from '../api/verifyEmail'

const Settings = () => {
  const token = localStorage.getItem("token") || null;
  const [status, setStatus] = useState(null)
  const [recipient, setRecipient] = useState(null)


  useEffect(() => {
    async function getUserDetails(){
      getAUserApi("http://localhost:8000/users/user-details", token)
      .then(res => {
        console.log("response from get api is ", res)
        setStatus(res.data.Status)
        setRecipient(res.data.Email)
        // console.log(recipient)
      })
    }

    getUserDetails();
  }, [token])

  const initialPasswordValues = { currentPassword: '', newPassword: '', confirmPassword: '' };

  function onSubmit(values) {
    console.log("values are ", values);
  }

  function onPasswordUpdateSubmit(value, {resetForm}) {
    updateApi("http://localhost:8000/users/change-password/", 
    {password:value.currentPassword, newPassword:value.newPassword}, token )
    .then(res => {
          if (res.message == "Password changed successfully"){
            alert("Password changed successfully!")
          }
          else{
            alert("Incorrect Current Password!")
          }
          resetForm()
    })
  }

  async function verifyUserEmail(recipient, token){
    // console.log(recipient, token)
    verifyEmail("http://localhost:8000/users/send-email", recipient, token)
    // .then(res => {
    //   console.log("email response is ", res)
    // })
  }

  return (
    <div className='settings-container'>
      <div className="public-container">
        <Formik initialValues={{ username: '', biography: '' }} onSubmit={onSubmit}>
          {({ values }) => (
            <Form>
              <div className="pub-heading">
                <h2>Public Info</h2>
              </div>
              <div className="left-container">
                <div className="pub-input">
                  <div className="content">
                    <p>Username</p>
                    <Field className="pub-input-field" name="username" type="text" placeholder="UserName" />
                  </div>
                  <div className="content">
                    <p>Biography</p>
                    <Field as="textarea" className="pub-input-field" name="biography" type="text" placeholder="Tell about yourself" />
                  </div>
                </div>
                <div className="pic-upload">
                  <img src="	https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                </div>
              </div>
              <div className="pub-sub-btn">
                <button type="submit">Save Changes</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <div className="public-container">
        <Formik initialValues={{ firstname: '', lastname: '', email: '', city: '' }} onSubmit={onSubmit}>
          {({ values }) => (
            <Form>
              <div className="pub-heading">
                <h2>Private Info</h2>
              </div>
              <div className="priv-input">
                <div className="user-input">
                  <p>First Name</p>
                  <Field className="pub-input-field" name="firstname" type="text" placeholder="First Name" />
                </div>
                <div className="user-input">
                  <p>Last Name</p>
                  <Field className="pub-input-field" name="lastname" type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className="priv-input">
                <div className="user-input">
                  <p>Email</p>
                  <Field className="pub-input-field" name="email" type="email" placeholder="Email address" />
                  
                  {status == "Not-Verified" ? 
                      (<p onClick={() => verifyUserEmail(recipient, token)} className='verify-email'>Verify Email</p>)
                      : <p className='verified'>Email Verified!</p>
                  }
                  
                  
                </div>
                <div className="user-input">
                  <p>City</p>
                  <Field className="pub-input-field" name="city" type="text" placeholder="City" />
                </div>
              </div>
              <div className="pub-sub-btn">
                <button type="submit">Save Changes</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <div className="public-container">
        <Formik initialValues={initialPasswordValues} validationSchema={ChangePasswordSchema} onSubmit={onPasswordUpdateSubmit}>
          {({ values }) => (
            <Form>
              <div className="pub-heading">
                <h2>Password</h2>
              </div>
              <div className="pass-container">
                <div className="pub-input">
                  <p>Current Password</p>
                  <Field className="pub-input-field" name="currentPassword" type="password" placeholder="Current password" />
                  <small className="forgot-password">
                    <p onClick={() => { console.log("pressed") }}>Forgot Password?</p>
                  </small>
                </div>
                <div className="pub-input">
                  <div className="content">
                    <p>New Password</p>
                    <Field className="pub-input-field" name="newPassword" type="password" placeholder="New Password" />
                    <ErrorMessage className='error' name="newPassword" component="div" />
                  </div>
                  <div className="content">
                    <p>Confirm Password</p>
                    <Field className="pub-input-field" name="confirmPassword" type="password" placeholder="Confirm Password" />
                    <ErrorMessage className='error' name="confirmPassword" component="div" />
                  </div>
                </div>
              </div>
              <div className="pub-sub-btn">
                <button type="submit">Save Changes</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Settings;
