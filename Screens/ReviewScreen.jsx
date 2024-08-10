import React from 'react'
import '../src/App.css'
import { Formik, Field, Form , ErrorMessage} from "formik";
import { ReviewSchema } from '../Schemas/ReviewSchema';

export default function ReviewScreen() {
    const initialValues = { 
        name: "", 
        email: "", 
        review: "",
        contact: "",
        profession: ""
    };

    const onSubmit = (values, { setSubmitting }) => {
        console.log('Form data', values);
        setSubmitting(false);
      };
    
  return (
    <div className='review-container'>
        <div className='review-img'>
            <img src="https://thechildrengreenbook.net/assets/images/banners/page-banner-42.jpg" 
                 alt=""/>
        </div>
        <div className="reviewForm">
            <div className="feedback">
                <h2>Feedback</h2>
            </div>

            <Formik
              initialValues={initialValues}
              validationSchema={ReviewSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <div className="upper-container">
                  <div className='review-input'>
                      <Field className="review-field" name="name" type="text" placeholder="Name"/>
                      <ErrorMessage className='error' name="name" component="div" />
                      {/* error message */}
                  </div>

                  <div className='review-input'>
                      <Field className="review-field" name="contact" type="text" placeholder="Contact"/>
                      <ErrorMessage className='error' name="contact" component="div" />
                      {/* error message */}
                  </div>
                </div>

                <div className="lower-container">
                  <div className='review-input'>
                      <Field className="review-field" name="email" type="text" placeholder="Email"/>
                      <ErrorMessage className='error' name="email" component="div" />
                      {/* error message */}
                  </div>

                  <div className='review-input'>
                      <Field className="review-field" name="profession" type="text" placeholder="Profession"/>
                      <ErrorMessage className='error' name="profession" component="div" />
                      {/* error message */}
                  </div>
                </div>

                  <div className='main-review'>
                      <Field as="textarea" className="review-field" name="review" type="text" placeholder='Comments/Message' />
                      <ErrorMessage className='error' name="review" component="div" />
                      {/* error message */}
                  </div>

                  <div className="submit-btn">
                      <button type="submit" className="btn">
                          <span>Submit</span>
                      </button>
                  </div>
              </Form>
            </Formik>
        </div>
    </div>
  )
}
