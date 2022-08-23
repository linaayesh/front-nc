import { useEffect, useState } from 'react';
import { GeneralView, DetailedView } from 'Components';
import userService from '../../../Services/user';

function Statistics() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = () => userService
      .getStatistics(4)
      .then(
        ((res) => {
          setIsLoading(false);
          setData(res.data);
        }),
      ).catch(() => {
        setIsLoading(true);
      });

    fetchData();
  }, []);
  const { ContentReport, balance, earning } = data;
  if (isLoading) {
    return (
      <h2>Loading</h2>
    );
  }
  return (
    <>
      <GeneralView count={ContentReport.count} balance={+balance} earning={+earning} />
      <DetailedView rows={ContentReport.rows} />
    </>
  );
}

export default Statistics;
