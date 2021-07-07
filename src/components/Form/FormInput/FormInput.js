import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const FormInput = ({name, email, password, status, touched, errors}) => {
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
        {touched.name && errors.name && <p>{errors.name}</p>}

        <label>Email</label>
        <Field type='text' name='email' />
        {touched.email && errors.email && <p>{errors.email}</p>}

        <label>Password</label>
        <Field type='text' name='password' />
        {touched.password && errors.password && <p>{errors.password}</p>}

        <button type='submit'>Submit</button>
      </Form>
      {users.map(user => {
        return (
          <ul key={user.id}>
            <li>User: {user.name}</li>
            <li>Email: {user.email}</li>
          </ul>
        );
      })}
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
      .post('https://reqres.in/api/users', values)
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
