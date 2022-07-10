import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export const LoginForm = () => {
  const navigate = useNavigate();
  
  return (
  <>
    <Formik
      initialValues={{
        email: '',

        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        // console.log(values);
        const res = {
          identifier: values.email,
          password: values.password,
        };
        const data = JSON.stringify(res);
        console.log(data)
        fetch('http://localhost:1337/api/auth/local', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: data,
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem('token', data.jwt);
          })
          .catch((err) => console.log(err));
        resetForm();
        navigate('/products');
      }}
    >
      {({ errors, touched }) => (
        <Form className='flex flex-col gap-2 justify-center items-center border-4 border-gray-500 bg-white rounded-lg shadow-lg p-5 max-w-xs'>
          <div className='flex flex-col gap-1 justify-center'>
            <div className='flex flex-row gap-2 justify-center items-center'>
              <label htmlFor='email'>Email:</label>
              <Field
                className='border-2'
                name='email'
                id='email'
                type='email'
                placeholder='email'
              />
            </div>
            {errors.email && touched.email ? (
              <div className='flex justify-center border-4 border-red-500 bg-red-500 text-white'>
                {errors.email}
              </div>
            ) : null}
          </div>
          <div className='flex flex-col gap-1 justify-center'>
            <div className='flex flex-row gap-1 justify-center items-center'>
              <label htmlFor='password'>Password:</label>
              <Field
                className='border-2'
                name='password'
                id='password'
                type='password'
                placeholder='password'
              />
            </div>
            {errors.password && touched.password ? (
              <div className='flex justify-center border-4 border-red-500 bg-red-500 text-white'>
                {errors.password}
              </div>
            ) : null}
          </div>
          <button type='submit' className='border-4 rounded border-red-500 bg-red-500 text-white'>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </>
);
}