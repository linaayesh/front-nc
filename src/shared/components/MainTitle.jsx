import PropTypes from 'prop-types';

export default function MainTitle({ title }) {
  return (
    <div className="main-title-container">
      <div className="main-title-icon" />
      <div className="main-title-text">
        {title}
      </div>
    </div>
  );
}

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
