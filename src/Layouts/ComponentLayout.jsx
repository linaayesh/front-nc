import Proptypes from 'prop-types';

export default function ComponentLayout(props) {
  const { title, children } = props;
  return (
    <div className="component-layout-container">
      {title !== 'default title' ? <h1>{title}</h1> : null }
      <div className="component-layout-subContainer">
        {children}
      </div>
    </div>
  );
}

ComponentLayout.propTypes = {
  title: Proptypes.string,
  children: Proptypes.arrayOf(Proptypes.element).isRequired,
};

ComponentLayout.defaultProps = {
  title: 'default title',
};
