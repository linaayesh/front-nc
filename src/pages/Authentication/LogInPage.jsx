import { LogInForm } from 'components';
import authImage from 'assets/images/authImage.png';

function LoginPage() {
  return (
    <div className="register">
      <img
        src={authImage}
        alt="List of posters"
        className="home-layout-image"
        loading="lazy"
        decoding="async"
      />
      <LogInForm />
    </div>
  );
}

export default LoginPage;
