import Proptypes from 'prop-types';
import { Card, Avatar, Statistic } from 'components/AntDesign';

export default function StatisticsGrid({ icon, title, value }) {
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
