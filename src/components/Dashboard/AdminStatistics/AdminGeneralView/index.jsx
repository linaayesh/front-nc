import { AntComponents, StatisticsGrid } from 'components';
import { ComponentLayout } from 'layouts';
import PropsTypes from 'prop-types';
import './style.css';
import { icons } from 'shared/constants';

export default function AdminGeneralView({
  count, earning, pendingUsers, Payout, allUsers,
}) {
  const {
    Content, Earnings, Payouts, PendingUsers, AllUsers,
  } = icons;

  const arr = [
    {
      icon: Content,
      title: 'Content',
      value: count,
    },
    {
      icon: Earnings,
      title: 'Earning',
      value: earning,
    },
    {
      icon: Payouts,
      title: 'Payouts',
      value: Payout,
    },
    {
      icon: AllUsers,
      title: 'All Users',
      value: allUsers,
    },
    {
      icon: PendingUsers,
      title: 'Pending Users',
      value: pendingUsers,
    },

  ];
  const { Card } = AntComponents;
  return (
    <ComponentLayout title="Statistics" heading="General View">
      <Card className="general-view-statistics">
        {arr.map(({
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
