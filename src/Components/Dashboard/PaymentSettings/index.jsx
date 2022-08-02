import React, { useState, useEffect } from 'react';
import './style.css';
import { AddData, EditData } from './PayComponents';
import userService from '../../../Services/user';
import Payment from '../../../Assets/Images/payment.png';

function PaymentSettings() {
  const [paymentSettings, setPaymentSettings] = useState(false);
  const [goToAddPage, setGoToAddPage] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    userService
      .getFinancialData()
      .then((res) => {
        if (res.data !== null) {
          setPaymentSettings(true);
          setCurrentUser(res.data);
        }
      });
  }, []);

  return (
    <div className="paymentDiv">
      <h1>Payment Settings</h1>
      <div className="paymentContainer">
        {!paymentSettings ? (
          <div>
            {!goToAddPage ? (
              <div className="paymentDivs">

                <img src={Payment} alt="NextUpComedy" className="paymentLogo" />
                <p className="paymentText">
                  You have not set up your payment settings yet.
                </p>

                <button className="pay-button" type="button" onClick={() => setGoToAddPage(true)}>
                  Add Payment Data
                </button>
              </div>
            ) : (
              <div>
                <AddData />
              </div>
            )}
          </div>
        ) : (
          <EditData currentUser={currentUser} />
        )}
      </div>
    </div>
  );
}

export default PaymentSettings;
