import { useState } from 'react';
import PropsTypes from 'prop-types';

import { useAppDispatch } from 'hooks';
import { approveUser, rejectUser } from 'store/admin/thunk';
import {
  Button,
  Space,
  Popconfirm,
  Modal,
  Radio,
  Input,
} from 'components/AntDesign';

function ModalForm({ user }) {
  const [value, setValue] = useState(1);
  const dispatch = useAppDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleApproveUser = (info) => {
    dispatch(approveUser(info));
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
        onConfirm={() => {
          handleApproveUser(user);
        }}
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
            onClick={() => handleRejectUser(user)}
          >
            Reject
          </Button>,
        ]}
      >
        <p>Are you sure that you want to reject this user？</p>
        <p>Choose the reason for rejection</p>
        <Radio.Group onChange={onChange} value={value}>
          <Space direction="vertical">
            <Radio value={1}>Option A</Radio>
            <Radio value={2}>Option B</Radio>
            <Radio value={3}>Option C</Radio>
            <Radio value={4}>
              Other
              {value === 4 ? (
                <Input
                  style={{
                    width: 100,
                    marginLeft: 10,
                  }}
                />
              ) : null}
            </Radio>
          </Space>
        </Radio.Group>
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
