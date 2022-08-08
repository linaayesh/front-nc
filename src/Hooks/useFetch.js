import { useState, useEffect } from 'react';
import { userService, adminService } from 'Services';

export default function useFetch(service, payload) {
  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const allServices = {
    createUser: userService.createUser(payload),
    updateUser: userService.updateUser(payload),
    getUser: userService.getUser,
    loginUser: userService.loginUser(payload),
    logoutUser: userService.logoutUser,
    googleLogin: userService.googleLogin,
    forgetPassword: userService.forgetPassword(payload),
    resetPassword: userService.resetPassword(payload),
    getFinancialData: userService.getFinancialData,
    addFinancialData: userService.addFinancialData(payload),
    updateFinancialData: userService.updateFinancialData(payload),

    approveUser: adminService.approveUserService(payload),
    rejectUser: adminService.rejectUserService(payload),
    getWaitingList: adminService.getWaitingListService,
    getApprovedList: adminService.getApprovedListService,
    getRejectedList: adminService.getRejectedListService,
  };

  const currentService = allServices[service];

  useEffect(() => {
    const abortController = new AbortController();

    currentService
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err.response.data);
      })
      .finally(() => setIsLoading(false));

    return () => abortController.abort();
  }, []);

  console.log({ data, error, isLoading });
  return { data, error, isLoading };
}
