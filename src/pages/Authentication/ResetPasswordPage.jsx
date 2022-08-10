import authImage from 'assets/Images/authImage.png';
import { ResetPasswordForm } from 'components';

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
