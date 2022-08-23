import { ComponentLayout } from 'Layouts';
import { MainTitle } from 'shared';
import { Table } from '../../../AntDesign';

export default function DetailedView(data) {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'name',
    },
    {
      title: 'Watched Seconds',
      dataIndex: 'watchedSeconds',
      key: 'watchedSeconds',
    },
    {
      title: 'Revenue',
      dataIndex: 'owedRevenue',
      key: 'owedRevenue',
    },
    {
      title: 'Ticket',
      dataIndex: 'tvodTicketsCount',
      key: 'tvodTicketsCount',
    },
  ];
  const { rows } = data;
  return (
    <ComponentLayout>
      <MainTitle title="Detailed View" />
      <Table
        columns={columns}
        dataSource={rows}
        pagination={{ pageSize: 5 }}
        scroll={{ x: 500 }}
      />
    </ComponentLayout>
  );
}
