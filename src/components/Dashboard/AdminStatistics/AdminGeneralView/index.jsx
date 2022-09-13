import { StatisticsGrid } from 'components';
import { ComponentLayout } from 'layouts';
import PropsTypes from 'prop-types';
import { Card } from 'components/AntDesign';
import { AdminGeneralColumns } from 'shared/objects/Users';

export default function AdminGeneralView({
  count, earning, pendingUsers, Payout, allUsers,
}) {
  const columns = AdminGeneralColumns(count, earning, pendingUsers, Payout, allUsers);
  return (
    <ComponentLayout title="Statistics" heading="General View">
      <Card className="general-view-statistics">
        {columns.map(({
          icon, value, title,
        }) => (
          <StatisticsGrid icon={icon} title={title} value={value} key={title} />
        ))}
      </Card>
    </ComponentLayout>
  );
}

AdminGeneralView.propTypes = {
  count: PropsTypes.number.isRequired,
  earning: PropsTypes.number.isRequired,
  pendingUsers: PropsTypes.number.isRequired,
  Payout: PropsTypes.number.isRequired,
  allUsers: PropsTypes.number.isRequired,
};
