import authImage from 'assets/Images/authImage.png';
import { ForgetPasswordForm } from 'components';

function ForgetPasswordPage() {
  return (
    <div className="register">
      <img
        src={authImage}
        alt="List of posters"
        className="home-layout-image"
        loading="lazy"
        decoding="async"
      />
      <ForgetPasswordForm />
    </div>
  );
}

export default ForgetPasswordPage;
