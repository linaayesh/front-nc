import PropsTypes from 'prop-types';
import { ComponentLayout } from 'layouts';
import { statisticsColumns } from 'shared/objects/Users';
import { MainTitle } from 'shared';
import { Table } from 'components/AntDesign';
import humanizeDuration from 'humanize-duration';

export default function DetailedView({ rows }) {
  return (
    <ComponentLayout>
      <MainTitle title="Detailed View" />
      <Table
        columns={statisticsColumns}
        dataSource={rows.map(((row) => ({
          title: row.title,
          watchedSeconds: humanizeDuration(row.contentReports[0].watchedSeconds * 1000, { units: ['h', 'm', 's'] }),
          owedRevenue: `${row.contentReports[0].owedRevenue.slice(0, 5)} £`,
          tvodTicketsCount: row.contentReports[0].tvodTicketsCount,
          key: row.title,
        })))}
        pagination={{ pageSize: 5 }}
        scroll={{ x: 500 }}
      />
    </ComponentLayout>
  );
}

DetailedView.propTypes = {
  rows: PropsTypes.shape([]).isRequired,
};
