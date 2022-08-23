import React from 'react';
import Proptypes from 'prop-types';

export default function MainTitle(props) {
  const { title } = props;
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
  title: Proptypes.string.isRequired,
};
