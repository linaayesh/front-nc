import { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import PropsTypes from 'prop-types';
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'hooks';
import { getUser, googleLogin } from 'store/auth/thunk';
import { message } from 'components/AntDesign';
import { CLIENT_ID } from 'shared/constants/config';

export default function GoogleAuth({ label, method }) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: 'email',
      });
    };
    gapi.load('client:auth2', start);
  }, []);

  const successResponse = async (response) => {
    const { tokenId } = response;

    await dispatch(googleLogin({ method, tokenId })).unwrap();
    navigate('/dashboard');
    dispatch(getUser());
  };

  const failureResponse = (response) => {
    message.error(response);
  };

  return (
    <GoogleLogin
      className="google-sign-up-button"
      buttonText={label}
      clientId={CLIENT_ID}
      onSuccess={successResponse}
      onFailure={failureResponse}
      cookiePolicy="single_host_origin"
    />

  );
}
GoogleAuth.propTypes = {
  label: PropsTypes.string.isRequired,
  method: PropsTypes.string.isRequired,
};
