import React from 'react';
import {withFormik, Form, Field} from 'formik';

const FormInput = ({name, email, password}) => {
  return (
    <div>
      <h1>Welcome to form</h1>
      <Form>
        <Field type='text' name='name' placeholder='Enter your name' />
        <Field type='text' name='email' placeholder='Enter your email' />
        <Field type='text' name='password' placeholder='Password goes here' />
      </Form>
    </div>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues({name, email, password}) {
    return {
      name: name || ' ',
      email: email || ' ',
      password: password || ''
    };
  }
});

export default FormInput;
