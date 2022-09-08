import Proptypes from 'prop-types';
import { Card, Statistic } from 'components/AntDesign';

export default function StatisticsGrid({ icon, title, value }) {
  return (
    <Card.Grid>
      <img src={icon} alt="icon" className="iconimg" />
      <Statistic title={title} value={value} />
    </Card.Grid>
  );
}

StatisticsGrid.propTypes = {
  icon: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  value: Proptypes.string.isRequired,
};
