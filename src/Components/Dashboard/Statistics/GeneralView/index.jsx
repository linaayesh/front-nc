import { AntComponents, StatisticsGrid } from 'Components';
import { ComponentLayout } from 'Layouts';
import PropsTypes from 'prop-types';
import { MainTitle } from 'shared';
import './style.css';

export default function GeneralView({ count, balance }) {
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
      value: balance,
    },
    {
      icon: 'https://joeschmoe.io/api/v1/random',
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
