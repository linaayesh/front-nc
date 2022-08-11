import { useState } from 'react';
import PropsTypes from 'prop-types';

import { imageValidation } from 'utils';
import { Upload, Avatar, ImgCrop } from 'components/AntDesign';
import UploadButton from './UploadButton';
import DeleteButton from './DeleteButton';
import './style.css';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const dummyRequest = ({ onSuccess }) => new Promise((resolve) => {
  setTimeout(() => {
    onSuccess('ok');
    resolve();
  }, 0);
});

function ImageUploader({ submitImageToForm }) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const beforeUpload = (file) => imageValidation(file);

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
    }

    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
        submitImageToForm(url);
      });
    }
  };

  const handleDelete = () => {
    setImageUrl('');
    submitImageToForm('');
  };

  return (
    <div>
      <ImgCrop beforeCrop={beforeUpload} rotate shape="round">
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={handleChange}
          customRequest={dummyRequest}
        >
          {imageUrl ? (
            <div className="avatar-image">
              <Avatar
                shape="circle"
                src={imageUrl}
                alt="avatar"
                style={{ width: '100%', height: '100%' }}
                loading="lazy"
                decoding="async"
              />
            </div>
          ) : (
            <UploadButton loading={loading} />
          )}
        </Upload>
      </ImgCrop>
      {imageUrl && <DeleteButton imageUrl={imageUrl} handleDelete={handleDelete} />}
    </div>
  );
}

export default ImageUploader;

ImageUploader.propTypes = {
  submitImageToForm: PropsTypes.func.isRequired,
};
