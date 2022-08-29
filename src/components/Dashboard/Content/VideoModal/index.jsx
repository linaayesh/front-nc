import React from 'react';
import { Modal } from 'components/AntDesign';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setVisible } from 'store/matchContent/slice';
import VideoCard from '../VideoCard';

function VideoModal() {
  const dispatch = useAppDispatch();
  const { searchResults, visible } = useAppSelector((state) => state.matchContents);

  return (
    <Modal
      title="Search Results"
      centered
      visible={visible}
      onOk={() => dispatch(setVisible(false))}
      onCancel={() => dispatch(setVisible(false))}
      width={1000}
      footer={false}
    >
      {
        searchResults.length
          ? searchResults.map(({ id, title, permalink }) => (
            <VideoCard
              key={id}
              id={id}
              title={title}
              permalink={permalink}
            />
          ))
          : <div>Sorry, we didn&apos;t find what you&apos;re looking for</div>
      }
    </Modal>
  );
}

export default VideoModal;
