import { message } from '../Components/AntDesign';

function imageValidation(file) {
  const isJpgOrPng = (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/webp');

  if (!isJpgOrPng) {
    message.error('Only JPG/PNG images are accepted!');
  }

  // Check if the file is less than 2MB
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must be smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

export default imageValidation;
