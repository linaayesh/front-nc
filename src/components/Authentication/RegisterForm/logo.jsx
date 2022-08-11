import logo from 'assets/images/NextUpLogo.png';
import './style.css';

export default function Logo() {
  return (
    <img
      src={logo}
      alt="logo of NextUpComedy"
      className="home-layout-logo"
      loading="lazy"
      decoding="async"
    />
  );
}
