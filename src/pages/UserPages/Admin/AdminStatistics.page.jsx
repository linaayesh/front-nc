import { AdminDetailedView, AdminGeneralView } from 'components';
import React from 'react';

function AdminStatisticsPage() {
  const rows = [
    {
      title: 'One Piece',
      owedRevenue: '1000',
      watchedTimeFrom: '2020-01-01',
      watchedTimeTo: '2020-01-02',
      views: '1000',
    },
    {
      title: 'Naruto',
      owedRevenue: '1000',
      watchedTimeFrom: '2020-01-01',
      watchedTimeTo: '2020-01-02',
      views: '125',
    },

  ];

  return (
    <>
      <AdminGeneralView
        count={322}
        earning={10}
        pendingUsers={10}
        Payout={0}
        allUsers={200}
      />
      <AdminDetailedView rows={rows} />
    </>
  );
}

export default AdminStatisticsPage;
