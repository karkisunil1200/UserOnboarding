import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

const FormInput = ({name, email, password}) => {
  return (
    <div>
      <h1>Welcome to form</h1>
      <Form>
        <label>Name</label>
        <Field type='text' name='name' />
        <label>Email</label>
        <Field type='text' name='email' />
        <label>Password</label>
        <Field type='text' name='password' />
      </Form>
    </div>
  );
};

const FormikFormInput = withFormik({
  mapPropsToValues({name, email, password}) {
    return {
      name: name || ' ',
      email: email || ' ',
      password: password || ''
    };
  }

  //   validationSchema: Yup.object().shape({
  //       name: Yup.string().required(),
  //       email: Yup.string().required(),
  //       password: Yup.string().required()
  //   })
})(FormInput);

export default FormikFormInput;
