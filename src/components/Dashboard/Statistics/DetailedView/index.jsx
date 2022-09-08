/* eslint-disable react/forbid-prop-types */
import PropsTypes from 'prop-types';
import { ComponentLayout } from 'layouts';
import { statisticsColumns } from 'shared/objects/Users';
import { MainTitle } from 'shared';
import { Table } from 'components/AntDesign';

export default function DetailedView({ rows }) {
  const lastContentReport = rows.contentReports[0];

  return (
    <ComponentLayout>
      <MainTitle title="Detailed View" />
      <Table
        columns={statisticsColumns}
        dataSource={
          rows.map(({
            title,
          }) => (
            {
              title,
              watchedSeconds: lastContentReport.watchedSeconds,
              owedRevenue: lastContentReport.owedRevenue,
              tvodTicketsCount: lastContentReport.tvodTicketsCount,
              key: title,
            }))
}
        pagination={{ pageSize: 5 }}
        scroll={{ x: 500 }}
      />
    </ComponentLayout>
  );
}

DetailedView.propTypes = {
  rows: PropsTypes.arrayOf(PropsTypes.object).isRequired,
};
