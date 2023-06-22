import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { MailOutlined, GlobalOutlined, PhoneOutlined } from '@ant-design/icons';

import { CustomCard } from './components/CustomCard';
import { CustomModal } from './components/CustomModal';
import { UserType, ModalDataType } from './types';
import { getUsers } from './services/userService';

import './App.scss';

const App: React.FC = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalDataType | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res: UserType[] = await getUsers();
        setUsers(
          res.map((user: UserType) => {
            user.avatar = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;
            user.isFavorite = false;
            return user;
          }),
        );
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleDelete = (id: number) => (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleFavor = (id: number) => (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          user.isFavorite = !user.isFavorite;
        }
        return user;
      }),
    );
  };

  const handleClickEdit = (id: number) => (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    const user = users.find((user) => user.id === id);
    if (user) {
      setModalData({
        id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        website: user.website,
      });
    }
    setModalOpen(true);
  };
  const handleClickOk = (data: ModalDataType) => {
    setModalOpen(false);
    setUsers(
      users.map((user) => {
        if (user.id === data.id) {
          user.name = data.name;
          user.email = data.email;
          user.phone = data.phone;
          user.website = data.website;
        }
        return user;
      }),
    );
  };

  return (
    <div className="App">
      <Row className="p-2" gutter={[20, 20]} justify="center">
        {users?.map((user) => (
          <Col key={user.username} xs={20} sm={16} md={12} lg={8} xl={6}>
            <CustomCard
              imgSrc={user.avatar}
              title={user.name}
              isFavorite={user.isFavorite}
              onClickDelete={handleDelete(user.id)}
              onClickFavor={handleFavor(user.id)}
              onClickEdit={handleClickEdit(user.id)}
              description={
                <>
                  <Row align="middle" gutter={10}>
                    <Col>
                      <MailOutlined rev="default" />
                    </Col>
                    <Col>
                      <span>{user.email}</span>
                    </Col>
                  </Row>
                  <Row align="middle" gutter={10}>
                    <Col>
                      <PhoneOutlined rev="default" />
                    </Col>
                    <Col>
                      <span>{user.phone}</span>
                    </Col>
                  </Row>
                  <Row align="middle" gutter={10}>
                    <Col>
                      <GlobalOutlined rev="default" />
                    </Col>
                    <Col>
                      <span>{user.website}</span>
                    </Col>
                  </Row>
                </>
              }
            />
          </Col>
        ))}
      </Row>
      <CustomModal
        title="Edit Information"
        isOpen={modalOpen}
        data={modalData}
        onCancel={() => {
          setModalOpen(false);
        }}
        onOk={handleClickOk}
      />
    </div>
  );
};

export default App;
