import React from 'react';
import authImage from '../Assets/Images/authImage.png';
import { ForgetPasswordForm } from '../Components';

function ForgetPasswordPage() {
  return (
    <div className="register">
      <img src={authImage} alt="List of posters" className="home-layout-image" />
      <ForgetPasswordForm />
    </div>
  );
}

export default ForgetPasswordPage;
