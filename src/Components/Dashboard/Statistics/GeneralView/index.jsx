/* eslint-disable no-unused-vars */
import { AntComponents, StatisticsGrid } from 'Components';
import { ComponentLayout } from 'Layouts';
import PropsTypes from 'prop-types';
import { MainTitle } from 'shared';
import './style.css';

export default function GeneralView(data) {
  const { count, balance, earning } = data;

  const arr = [
    {
      icon: 'https://joeschmoe.io/api/v1/random',
      title: 'Content',
      value: count,
    },
    {
      icon: 'https://joeschmoe.io/api/v1/random',
      title: 'Balance',
      value: balance,
    },
    {
      icon: 'https://joeschmoe.io/api/v1/random',
      title: 'Earning',
      value: earning,
    },
    {
      icon: 'https://joeschmoe.io/api/v1/random',
      title: 'Payouts',
      value: 22,
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

GeneralView.prototype = {
  count: PropsTypes.number.isRequired,
  balance: PropsTypes.number.isRequired,
  earning: PropsTypes.number.isRequired,
};

// GeneralView.defaultProps = {
//   count: 0,
// };
