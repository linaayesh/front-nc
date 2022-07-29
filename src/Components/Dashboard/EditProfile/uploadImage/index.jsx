import { useState } from 'react';
import PropsTypes from 'prop-types';

import {
  Button,
  message,
  Upload,
  Avatar,
  ImgCrop,
  LoadingOutlined,
  PlusOutlined,
  DeleteOutlined,
} from '../../../AntDesign';
import './style.css';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  console.log('before upload - file', file);
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

  if (!isJpgOrPng) {
    message.error('Only JPG/PNG images are accepted!');
  }

  // is less than 2MB
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must be smaller than 2MB!');
  }

  return isJpgOrPng && isLt2M;
};

function ImageUploader({ submitImageToForm }) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
    }

    if (info.file.percent === 100) {
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

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const deleteButton = (
    <div>
      {imageUrl && (
        <Button danger icon={<DeleteOutlined />} size="medium" onClick={handleDelete}>
          Remove
        </Button>
      )}
    </div>
  );

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
        >
          {imageUrl ? (
            <div className="avatar-image">
              <Avatar
                shape="circle"
                src={imageUrl}
                alt="avatar"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          ) : (
            uploadButton
          )}
        </Upload>
      </ImgCrop>
      {imageUrl && deleteButton}
    </div>
  );
}

export default ImageUploader;

ImageUploader.propTypes = {
  submitImageToForm: PropsTypes.func.isRequired,
};
