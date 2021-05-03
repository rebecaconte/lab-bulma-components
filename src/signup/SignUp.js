import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar.js'
import FormField from './formfield/FormField.js'
import CoolButton from './coolbutton/CoolButton.js'


const SignUp = () => {
  return (
    <div>
      <Navbar />

      <FormField label="Name" type="text" placeholder="Rebeca" />
      <FormField label="Email" type="email" placeholder="rebeca@gmail.com" />
      <FormField label="password" type="password" placeholder="type here your password" />

      <CoolButton kind="isSmall isSuccess" >Submit</CoolButton>
    </div>
  );
};

export default SignUp;
