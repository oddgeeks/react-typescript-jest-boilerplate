import React, { useState, useEffect } from 'react';
import { Col, Row, Modal, Input, Space } from 'antd';
import { ModalDataType } from '../types';

interface CustomModalProps {
  title: string;
  isOpen: boolean;
  data: ModalDataType;
  onOk: (data: ModalDataType) => void;
  onCancel: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export const CustomModal: React.FC<CustomModalProps> = ({ isOpen, data, onOk, onCancel, title }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [website, setWebsite] = useState<string>('');

  useEffect(() => {
    setName(data?.name);
    setEmail(data?.email);
    setPhone(data?.phone);
    setWebsite(data?.website);
  }, [data]);

  const handleClickOk = () => {
    onOk({ id: data.id, name, email, phone, website });
  };

  return (
    <Modal title={title} centered open={isOpen} onOk={handleClickOk} onCancel={onCancel}>
      <Space className="d-block" size="middle" direction="vertical">
        <Row align="middle" gutter={5}>
          <Col span="24">
            <label htmlFor="modalInputName">Full Name</label>
          </Col>
          <Col span="24">
            <Input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} id="modalInputName" />
          </Col>
        </Row>
        <Row align="middle" gutter={5}>
          <Col span="24">
            <label htmlFor="modalInputEmail">Email</label>
          </Col>
          <Col span="24">
            <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} id="modalInputEmail" />
          </Col>
        </Row>
        <Row align="middle" gutter={5}>
          <Col span="24">
            <label htmlFor="modalInputPhone">Phone</label>
          </Col>
          <Col span="24">
            <Input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} id="modalInputPhone" />
          </Col>
        </Row>
        <Row align="middle" gutter={5}>
          <Col span="24">
            <label htmlFor="modalInputWebsite">Website</label>
          </Col>
          <Col span="24">
            <Input
              placeholder="Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              id="modalInputWebsite"
            />
          </Col>
        </Row>
      </Space>
    </Modal>
  );
};
