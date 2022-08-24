import PropsTypes from 'prop-types';
import { ComponentLayout } from 'Layouts';
import { statisticsColumns } from 'Objects/Users';
import { MainTitle } from 'shared';
import { Table } from 'Components/AntDesign';

export default function DetailedView({ rows }) {
  return (
    <ComponentLayout>
      <MainTitle title="Detailed View" />
      <Table
        columns={statisticsColumns}
        dataSource={
          rows.map(({ title, contentReports }) => (
            {
              title,
              watchedSeconds: contentReports[0].watchedSeconds,
              owedRevenue: contentReports[0].owedRevenue,
              tvodTicketsCount: contentReports[0].tvodTicketsCount,
            }))
}
        pagination={{ pageSize: 5 }}
        scroll={{ x: 500 }}
      />
    </ComponentLayout>
  );
}

DetailedView.propTypes = {
  rows: PropsTypes.arrayOf.isRequired,
};
