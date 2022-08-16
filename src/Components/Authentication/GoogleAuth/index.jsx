import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import PropsTypes from 'prop-types';
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../../Store/Slices/checkAuthSlice';
import axiosCall from '../../../Services/ApiCall';
import { message } from '../../AntDesign';

const clientID = process.env.REACT_APP_CLIENT_ID;
export default function GoogleAuth({ label, method }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientID,
        scope: 'email',
      });
    };
    gapi.load('client:auth2', start);
  }, []);

  const successResponse = async (response) => {
    const { tokenId } = response;
    try {
      const googleResponse = await axiosCall(`/api/v1/auth/${method}/google`, 'post', { tokenId });
      if (googleResponse.status === 201) message.success('Sign Up Successfully. Wait for approval');
      if (googleResponse.status === 200) {
        message.success(googleResponse.data.message);
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
      clientId={clientID}
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
