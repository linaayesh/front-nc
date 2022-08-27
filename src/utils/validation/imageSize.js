import { message } from 'components/AntDesign';
import { IMAGE_VALIDATION_MESSAGES } from 'shared/constants';

function imageValidation(file) {
  const isJpgOrPng = (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/webp');

  if (!isJpgOrPng) {
    message.error(IMAGE_VALIDATION_MESSAGES.IMAGE_TYPE);
  }

  // Check if the file is less than 2MB
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error(IMAGE_VALIDATION_MESSAGES.IMAGE_SIZE);
  }
  return isJpgOrPng && isLt2M;
}

export default imageValidation;
