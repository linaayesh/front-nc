import authImage from 'Assets/Images/authImage.png';
import { ResetPasswordForm } from 'Components';

function ResetPasswordPage() {
  return (
    <div className="register">
      <img
        src={authImage}
        alt="List of posters"
        className="home-layout-image"
        loading="lazy"
        decoding="async"
      />
      <ResetPasswordForm />
    </div>
  );
}

export default ResetPasswordPage;
