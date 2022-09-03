import { useState } from 'react';
import PropsTypes from 'prop-types';

import { useAppDispatch } from 'hooks';
import { approveUser, rejectUser } from 'store/admin/thunk';
import {
  Button,
  Space,
  Popconfirm,
  Modal,
} from 'components/AntDesign';
import ReasonOfRejection from './RejectionReason';

function ModalForm({ user }) {
  const [value, setValue] = useState(1);
  const dispatch = useAppDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onChange = (e) => setValue(e.target.value);

  const showModal = () => setIsModalVisible(true);

  const handleCancel = () => setIsModalVisible(false);

  const handleApproveUser = (userInfo) => {
    dispatch(approveUser(userInfo));
    setIsModalVisible(false);
  };

  const handleRejectUser = (userInfo) => {
    dispatch(rejectUser(userInfo));
    setIsModalVisible(false);
  };

  return (
    <Space size="middle">
      <Popconfirm
        title="Are you sure that you want to Approve this user？"
        okText="Yes"
        cancelText="No"
        onConfirm={() => handleApproveUser(user)}
      >
        <Button>Approve</Button>
      </Popconfirm>
      <Button type="danger" onClick={showModal}>
        Reject
      </Button>

      <Modal
        title="Reject User"
        visible={isModalVisible}
        onOk={() => handleRejectUser(user)}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="danger"
            onClick={() => handleRejectUser(user, value)}
          >
            Reject
          </Button>,
        ]}
      >
        <ReasonOfRejection value={value} onChange={onChange} />
      </Modal>
    </Space>
  );
}

export default ModalForm;

ModalForm.propTypes = {
  user: PropsTypes.shape({
    id: PropsTypes.number,
    name: PropsTypes.string,
    email: PropsTypes.string,
    createdAt: PropsTypes.string,
    roleName: PropsTypes.string,
  }).isRequired,
};
