import { LogInForm } from 'Components';
import authImage from 'Assets/Images/authImage.png';

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
