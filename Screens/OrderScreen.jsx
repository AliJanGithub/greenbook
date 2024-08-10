import React from 'react';
import '../src/App.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { OrderSchema } from '../Schemas/OrderSchema';
import orderApi from '../api/signUpApi';

export default function OrderScreen() {
  const initialValues = {
    name: '',
    email: '',
    contact: '',
    date: '', 
    copies: '', 
    bookname: '',
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log('Form data', values);
    orderApi("http://localhost:8000/buyers/", {
      name:values.name,
      email:values.email,
      contact:values.contact,
      date:values.date,
      copies:values.copies,
      bookname:values.bookname
    }).then((res) => console.log(res))
    setSubmitting(false);
  };

  return (
    <div className='review-container'>
      <div className='review-img'>
        <img src='https://thechildrengreenbook.net/assets/images/book-illustrations/thumbnail/ch11.jpg' alt='' />
      </div>
      <div className='reviewForm'>
        <div className='feedback'>
          <h2>Order</h2>
        </div>

        <Formik initialValues={initialValues} validationSchema={OrderSchema} onSubmit={onSubmit}>
          <Form>
            <div className='upper-container'>
              <div className='review-input'>
                <Field className='review-field' name='name' type='text' placeholder='Full Name' />
                <ErrorMessage className='error' name='name' component='div' />
                {/* error message */}
              </div>

              <div className='review-input'>
                <Field className='review-field' name='contact' type='text' placeholder='Phone Number' />
                <ErrorMessage className='error' name='contact' component='div' />
                {/* error message */}
              </div>
            </div>

            <div className='lower-container'>
              <div className='review-input'>
                <Field className='review-field' name='email' type='text' placeholder='Email' />
                <ErrorMessage className='error' name='email' component='div' />
                {/* error message */}
              </div>

              <div className='review-input'>
                <Field className='review-field' name='date' type='date' placeholder='Date' />
                <ErrorMessage className='error' name='date' component='div' />
                {/* error message */}
              </div>
            </div>

            <div className='lower-container'>
              <div className='review-input'>
                <Field className='review-field' name='copies' type='number' placeholder='No. of Copies' />
                <ErrorMessage className='error' name='copies' component='div' />
                {/* error message */}
              </div>

              <div className='review-input'>
                <Field className='review-field' name='bookname' type='text' placeholder='Book Name' />
                <ErrorMessage className='error' name='bookname' component='div' />
                {/* error message */}
              </div>
            </div>

            <div className='submit-btn'>
              <button type='submit' className='btn'>
                <span>Get A Book</span>
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
