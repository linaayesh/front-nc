import { useState } from 'react';
import PropsTypes from 'prop-types';
import {
  Button,
  Space,
  message,
  Popconfirm,
  Modal,
  Radio,
  Input,
} from '../../../AntDesign';
import axiosCall from '../../../../Services/ApiCall';

function ModalForm({ user, dataSource, setDataSource }) {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const userId = user.id;
  const error = () => {
    message.error('This is an error message');
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const approveuser = (id) => {
    axiosCall(`/api/v1/user/approve/${id}`, 'patch', null)
      .then(() => {
        const newData = dataSource.filter((item) => item.id !== id);
        setDataSource(newData);
      })
      .catch(() => {
        error();
      });
  };
  const rejectuser = (id) => {
    axiosCall(`/api/v1/user/reject/${id}`, 'patch', null)
      .then(() => {
        const newData = dataSource.filter((item) => item.id !== id);
        setDataSource(newData);
      })
      .catch(() => {
        error();
      });
  };
  const handleReject = (userID) => {
    setIsModalVisible(false);
    rejectuser(userID);
  };
  return (
    <Space size="middle">
      <Popconfirm
        title="Are you sure that you want to Approve this user？"
        okText="Yes"
        cancelText="No"
        onConfirm={() => {
          approveuser(userId);
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
        onOk={() => handleReject(userId)}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="danger"
            onClick={() => handleReject(userId)}
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
  dataSource: PropsTypes.arrayOf(
    PropsTypes.shape({
      id: PropsTypes.number,
      name: PropsTypes.string,
      email: PropsTypes.string,
      createdAt: PropsTypes.string,
      roleName: PropsTypes.string,
    }),
  ).isRequired,
  setDataSource: PropsTypes.func.isRequired,
};
