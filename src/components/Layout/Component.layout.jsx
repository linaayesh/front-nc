import PropTypes from 'prop-types';

export default function ComponentLayout(props) {
  const { title, children } = props;
  return (
    <div className="component-layout-container">
      {title && <h1>{title}</h1>}
      <div className="component-layout-subContainer">
        {children}
      </div>
    </div>
  );
}

ComponentLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

ComponentLayout.defaultProps = {
  title: '',
};
