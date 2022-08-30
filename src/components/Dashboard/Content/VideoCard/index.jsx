import PropsTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import defaultPoster from 'assets/images/default-poster.jpg';
import { Card } from 'components/AntDesign';
import { MATCH_CONTENT_ENDPOINT } from 'shared/constants/endpoints';
import '../ContentList/style.css';

function VideoCard({ id, title, permalink }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(MATCH_CONTENT_ENDPOINT(id))}
      hoverable
    >
      <div className="contents-list__video-card">
        <div className="image-wrapper">
          <img src={defaultPoster} alt={title} />
        </div>
        <div className="info">
          <h3 className="title">{title}</h3>
          <p className="permalink">{permalink}</p>
        </div>
      </div>
    </Card>
  );
}

VideoCard.propTypes = {
  id: PropsTypes.string.isRequired,
  title: PropsTypes.string.isRequired,
  permalink: PropsTypes.string.isRequired,
};

export default VideoCard;
