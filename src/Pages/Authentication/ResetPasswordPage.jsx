import React from 'react';
import authImage from '../../Assets/Images/authImage.png';
import { ResetPasswordForm } from '../../Components';

function ResetPasswordPage() {
  return (
    <div className="register">
      <img src={authImage} alt="List of posters" className="home-layout-image" />
      <ResetPasswordForm />
    </div>
  );
}

export default ResetPasswordPage;
