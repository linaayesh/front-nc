import Proptypes from 'prop-types';
import './style.css';
import { AntComponents } from 'Components';

export default function StatisticsGrid({ icon, title, value }) {
  const { Card, Avatar, Statistic } = AntComponents;
  return (
    <Card.Grid>
      <Avatar
        size={64}
        src={icon}
        className="statistic-grid-avatar"
      />
      <Statistic title={title} value={value} />
    </Card.Grid>
  );
}

StatisticsGrid.propTypes = {
  icon: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  value: Proptypes.number.isRequired,
};
