import React from 'react';
import { LogInForm } from '../Components';
import authImage from '../Assets/Images/authImage.png';

function RegisterPage() {
  return (
    <div className="register">
      <img src={authImage} alt="List of posters" className="home-layout-image" />
      <LogInForm />
    </div>
  );
}

export default RegisterPage;
