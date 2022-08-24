/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { GeneralView, DetailedView } from 'Components';
import userService from 'Services/user';
// import useAuth from 'Hooks/useAuth';

function Statistics() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  // const currentUser = useAuth();
  useEffect(() => {
    const fetchData = () => userService.getStatistics(4)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.msg))
      .finally(() => setIsLoading(false));
    fetchData();
  }, []);

  const { Content, earning } = data;
  if (error) console.log(2222, error);
  if (isLoading) {
    return (
      <h2>Loading</h2>
    );
  }console.log(Content);
  // eslint-disable-next-line no-unsafe-optional-chaining, max-len
  const balance = +Content?.rows?.reduce((acc, { owedAccRevenue }) => +acc + Number(owedAccRevenue), 0).toFixed(4);
  console.log(33333, balance);
  return (
    <>
      <GeneralView
        count={Content.count}
        balance={balance}
        earning={+earning}
      />
      <DetailedView rows={Content.rows} />
    </>
  );
}

export default Statistics;
