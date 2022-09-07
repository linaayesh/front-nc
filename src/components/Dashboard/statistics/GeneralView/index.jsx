import { AntComponents, StatisticsGrid } from 'components';
import { ComponentLayout } from 'layouts';
import PropsTypes from 'prop-types';
import { MainTitle } from 'shared';
import './style.css';
import { icons } from 'shared/constants';

export default function GeneralView({ count, balance }) {
  const {
    Content, Balance, earnings, Payouts,
  } = icons;
  const arr = [
    {
      icon: Content,
      title: 'Content',
      value: count,
    },
    {
      icon: Balance,
      title: 'Balance',
      value: balance,
    },
    {
      icon: earnings,
      title: 'Earning',
      value: balance,
    },
    {
      icon: Payouts,
      title: 'Payouts',
      value: 0,
    },
  ];
  const { Card } = AntComponents;
  return (
    <ComponentLayout title="Statistics">
      <MainTitle title="General View" />
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

GeneralView.propTypes = {
  count: PropsTypes.number.isRequired,
  balance: PropsTypes.number.isRequired,
};
