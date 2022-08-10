import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactComponent as NotFound } from 'assets/images/NotFound.svg';

export default function Notfound({ link, pageClassName, title }) {
  return (
    <div className={`sub__container ${pageClassName}`}>
      <div className="not-found-section" id="box2">
        <h2 className="not-found-subTitle">Page Not Found</h2>
        <Link className="not-found-back" to={link}>
          {title}
        </Link>
      </div>
      <div className="not-found-section" id="box">
        <NotFound className="notFound" />

        <h1 className="not-found-title">404</h1>
      </div>

    </div>
  );
}

Notfound.propTypes = {
  link: PropTypes.string.isRequired,
  pageClassName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
