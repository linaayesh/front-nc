import { CORRECT_CHECKER } from 'shared/constants';
import './style.css';

function VerifyEmail() {
  return (

    <div className="verify-btn-div">
      <p>
        Your email has been verified.
      </p>
      <img
        src={CORRECT_CHECKER}
        alt="background"
        className="verify-img"
        loading="lazy"
        decoding="async"
      />

    </div>
  );
}

export default VerifyEmail;
