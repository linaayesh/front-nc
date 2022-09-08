import { useEffect, useState } from 'react';
import { GeneralView, DetailedView } from 'components';
import { userService } from 'services';
import { useAppSelector } from 'hooks';

function Statistics() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [setError] = useState('');
  const {
    checkAuth: { user },
  } = useAppSelector((state) => state);

  useEffect(() => {
    if (user.id) {
      const fetchData = () => userService
        .getStatistics(user.id)
        .then((res) => setData(res.data.data))
        .catch((err) => setError(err.msg))
        .finally(() => setIsLoading(false));
      fetchData();
    }
  }, []);

  const { Content, earning } = data;
  if (isLoading) {
    return <h2>Loading</h2>;
  }
  // eslint-disable-next-line no-unsafe-optional-chaining, max-len
  const balance = +Content?.rows
    ?.reduce((acc, { owedAccRevenue }) => +acc + Number(owedAccRevenue), 0)
    .toFixed(4);
  return (
    <>
      <GeneralView count={Content.count} balance={balance} earning={+earning} />
      <DetailedView rows={Content.rows} />
    </>
  );
}

export default Statistics;
