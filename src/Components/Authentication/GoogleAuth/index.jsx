import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import PropsTypes from 'prop-types';
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { CLIENT_ID } from 'Constants/config';
import { HTTP_EXCEPTIONS_MESSAGES } from 'Constants';
import { setAuth } from '../../../Store/Slices/checkAuthSlice';
import userService from '../../../Services/user';
import { message } from '../../AntDesign';

export default function GoogleAuth({ label, method }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      const googleResponse = await userService.googleLogin(method, tokenId);

      if (googleResponse.status === 201) {
        message.success(HTTP_EXCEPTIONS_MESSAGES[googleResponse.data.message]);
      }
      if (googleResponse.status === 200) {
        message.success(HTTP_EXCEPTIONS_MESSAGES[googleResponse.data.message]);
        navigate('/dashboard');
        const {
          id, name, roleId, email,
        } = googleResponse.data.payload;
        dispatch(
          setAuth({
            id,
            name,
            email,
            roleId,
            isLoggedIn: true,
          }),
        );
      }
    } catch (error) {
      console.log(error);
      if (error.toString().includes('NOT EXIST USER')) {
        message.error(HTTP_EXCEPTIONS_MESSAGES['NOT EXIST USER']);
      } else if (error.toString().includes(' ALREADY APPROVED')) {
        message.error(HTTP_EXCEPTIONS_MESSAGES['APPROVED ACCOUNT']);
      }
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
