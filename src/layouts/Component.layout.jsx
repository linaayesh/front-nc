import PropTypes from 'prop-types';

export default function ComponentLayout(props) {
  const { title, children, heading } = props;
  return (
    <div className="component-layout-container">
      {title && <h1>{title}</h1>}
      <div className="component-layout-subContainer">
        {heading
          && (
          <div className="heading-nav">
            <div className="heading-icon" />
            <div className="title-heading">{heading}</div>
          </div>
          )}
        {children}
      </div>
    </div>
  );
}

ComponentLayout.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

ComponentLayout.defaultProps = {
  title: '',
  heading: '',
};
