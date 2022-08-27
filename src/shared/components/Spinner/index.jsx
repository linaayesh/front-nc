import { LoadingOutlined, Spin } from 'components/AntDesign';
import './style.css';

const antIcon = <LoadingOutlined spin />;

function Loader() {
  return (
    <div className="loader">
      <Spin indicator={antIcon} size="large" />
    </div>
  );
}

export default Loader;
