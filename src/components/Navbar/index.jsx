import 'font-awesome/css/font-awesome.min.css';
import PropTypes from 'prop-types';
import { useAppSelector } from 'hooks';
import { Button, Space } from 'components/AntDesign';
import './style.css';
import { Loader } from 'shared/components';

function Navbar({ handleClick }) {
  const { checkAuth: { user }, user: { isLoading } } = useAppSelector((state) => state);
  return (
    !isLoading ? (
      <nav className="navbar">
        <div className="leftside">
          <div className="bti">
            <Button onClick={handleClick}>
              <i className="fa fa-bars" />
            </Button>
          </div>
        </div>
        <div className="rightside">
          <i className="fa fa-bell icon" />

          <Space>
            <img
              src={user.image}
              alt="logo"
              className="userimg"
              loading="lazy"
              decoding="async"
            />
          </Space>
        </div>
      </nav>
    ) : <Loader />);
}

export default Navbar;
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
