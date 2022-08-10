import authImage from 'assets/Images/authImage.png';
import { RegisterForm } from 'components';

function RegisterPage() {
  return (
    <div className="register">
      <img
        src={authImage}
        alt="List of posters"
        className="home-layout-image"
        loading="lazy"
        decoding="async"
      />
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
