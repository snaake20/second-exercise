import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { fetchCategories, postProduct } from '../../utils/fetches';

export const AddProductForm = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((res) => setCategories(res))
  }, []);
  const categoriesArray = categories.map((c) => c.attributes.name)
  // console.log(categoriesArray)
  return (
  <>
    <Formik
      initialValues={{
        title: '',
        price: 0,
        description: '',
        _category: '',
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string().required('Required'),
        price: Yup.number().required('Required'),
        description: Yup.string().required('Required'),
        _category: Yup.string().oneOf(categoriesArray)
      })}
      onSubmit={(values, { resetForm }) => {
        console.log(values)
        // const { title, price, description, _category } = values;
        postProduct(values)
        resetForm();
        navigate('/products');
      }}
    >
      {({ errors, touched }) => (
        <Form className='flex flex-col gap-2 justify-center items-center border-4 border-gray-500 bg-white rounded-lg shadow-lg p-5 max-w-xs'>
          <div className='flex flex-col gap-1 justify-center'>
            <div className='flex flex-row gap-2 justify-center items-center'>
              <label htmlFor='title'>Title:</label>
              <Field
                className='border-2'
                name='title'
                id='title'
                type='text'
                placeholder='title'
              />
            </div>
            {errors.title && touched.title ? (
              <div className='flex justify-center border-4 border-red-500 bg-red-500 text-white'>
                {errors.title}
              </div>
            ) : null}
          </div>
          <div className='flex flex-col gap-1 justify-center'>
            <div className='flex flex-row gap-1 justify-center items-center'>
              <label htmlFor='price'>Price:</label>
              <Field
                className='border-2'
                name='price'
                id='price'
                type='number'
                placeholder={0.00}
              />
            </div>
            {errors.price && touched.price ? (
              <div className='flex justify-center border-4 border-red-500 bg-red-500 text-white'>
                {errors.price}
              </div>
            ) : null}
          </div>
          <div className='flex flex-col gap-1 justify-center'>
            <div className='flex flex-row gap-1 justify-center items-center'>
              <label htmlFor='description'>Description:</label>
              <Field
                className='border-2'
                name='description'
                id='description'
                as='textarea'
                placeholder='description'
              />
            </div>
            {errors.description && touched.description ? (
              <div className='flex justify-center border-4 border-red-500 bg-red-500 text-white'>
                {errors.description}
              </div>
            ) : null}
          </div>
          <div className='flex flex-col gap-1 justify-center'>
            <div className='flex flex-row gap-1 justify-center items-center'>
              <label htmlFor='category'>Category:</label>
              <Field
                className='border-2'
                name='category'
                id='category'
                as='select'
              >
            <option>Select category</option>
                {categoriesArray.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Field>
            </div>
            {/* {errors._category && touched._category ? (
              <div className='flex justify-center border-4 border-red-500 bg-red-500 text-white'>
                {errors._category}
              </div>
            ) : null} */}
          </div>
          <button type='submit' className='border-4 rounded border-red-500 bg-red-500 text-white'>
            Add Product
          </button>
        </Form>
      )}
    </Formik>
  </>
);
}