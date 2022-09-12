/* eslint-disable react/forbid-prop-types */
import PropsTypes from 'prop-types';
import { ComponentLayout } from 'layouts';
import { latestReportColumns } from 'shared/objects/Users';
import { Table } from 'components/AntDesign';

export default function AdminDetailedView({ rows }) {
  return (
    <ComponentLayout heading="Latest Report ">
      <Table
        columns={latestReportColumns}
        dataSource={rows.map(((row) => ({
          title: row.title,
          watchedTimeFrom: row.watchedTimeFrom,
          watchedTimeTo: row.watchedTimeTo,
          owedRevenue: `${row.owedRevenue.slice(0, 5)} £`,
          key: row.title,
        })))}
        pagination={{ pageSize: 5 }}
        scroll={{ x: 500 }}
      />
    </ComponentLayout>
  );
}

AdminDetailedView.propTypes = {
  rows: PropsTypes.array.isRequired,
};
