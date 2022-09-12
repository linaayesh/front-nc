import { GeneralView, DetailedView } from 'components';

function UserStatistics() {
  const rows = [
    {
      title: 'One Piece',
      contentReports: [
        {
          watchedSeconds: 100,
          owedRevenue: '10.00',
          tvodTicketsCount: 10,
        },
      ],
    },
    {
      title: 'Naruto',
      contentReports: [
        {
          watchedSeconds: 50,
          owedRevenue: '5.00',
          tvodTicketsCount: 5,
        },
      ],
    },

  ];

  return (
    <>
      <GeneralView count={322} balance={55} earning={10} />
      <DetailedView rows={rows} />
    </>
  );
}

export default UserStatistics;
