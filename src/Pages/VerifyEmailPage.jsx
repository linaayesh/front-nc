import React from 'react';
import { VerifyEmail } from '../Components';
import authImage from '../Assets/Images/authImage.png';

function VerifyEmailPage() {
  return (
    <div className="verify">
      <img
        src={authImage}
        alt="List of posters"
        className="home-layout-image"
        loading="lazy"
        decoding="async"
      />
      <VerifyEmail />
    </div>
  );
}

export default VerifyEmailPage;
