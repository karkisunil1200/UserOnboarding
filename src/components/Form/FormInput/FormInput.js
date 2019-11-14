import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const FormInput = ({name, email, password, status}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    status && setUsers(animals => [...users, status]);
  }, [status]);
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
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required()
  }),

  handleSubmit(values, {setStatus}) {
    axios
      .post('https://reqres.in/api/users')
      .then(res => {
        console.log(res);
        setStatus(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
})(FormInput);

export default FormikFormInput;
