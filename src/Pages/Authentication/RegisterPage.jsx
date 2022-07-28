import React from 'react';
import authImage from '../../Assets/Images/authImage.png';
import { RegisterForm } from '../../Components';

function RegisterPage() {
  return (
    <div className="register">
      <img src={authImage} alt="List of posters" className="home-layout-image" />
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
