/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { GeneralView, DetailedView } from 'components';
import { userService } from 'services';
import { useAppSelector } from 'hooks';

function Statistics() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const { checkAuth: { user } } = useAppSelector((state) => state);
  console.log(user);
  useEffect(() => {
    const fetchData = () => userService.getStatistics(3)
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
  return (
    <>
      <GeneralView
        count={1}
        balance={balance}
        earning={+earning}
      />
      <DetailedView rows={[{
        title: 'dkdkdk',
        watchedSeconds: 100,
        owedRevenue: 200,
        tvodTicketsCount: 300,
      }]}
      />
    </>
  );
}

export default Statistics;
