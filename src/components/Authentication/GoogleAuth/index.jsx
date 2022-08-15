import { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import PropsTypes from 'prop-types';
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'hooks';
import { message } from 'components/AntDesign';
import { CLIENT_ID } from 'shared/constants/config';
import { axiosCall } from 'utils';
import { getUser } from 'store/auth/thunk';

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
    try {
      const googleResponse = await axiosCall(`/api/v1/auth/${method}/google`, 'post', { tokenId });
      // ! It suppose to redirect to the verifyEmail page
      if (googleResponse.status === 201) message.success('Sign Up Successfully. Wait for approval');
      if (googleResponse.status === 200) {
        message.success(googleResponse.data.message);
        navigate('/dashboard');

        dispatch(getUser());
      }
    } catch (error) {
      message.error(error.response.data.message);
      if (error.response.data.message === 'APPROVED ACCOUNT') message.error('Waiting for approval || already approved account');
    }
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
