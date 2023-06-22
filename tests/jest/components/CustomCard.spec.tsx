/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Col, Row } from 'antd';
import { MailOutlined, GlobalOutlined, PhoneOutlined } from '@ant-design/icons';

import { CustomCard } from '@/components/CustomCard';

describe('CustomCard component', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  test('If favorite, the icon should be HeartFilled', async () => {
    // given
    const mockUser = {
      id: 3,
      avatar: 'https://avatars.dicebear.com/v2/avataaars/Samantha.svg?options[mood][]=happy',
      email: 'Nathan@yesenia.net',
      isFavorite: true,
      name: 'Clementine Bauch',
      phone: '1-463-123-4447',
      username: 'Samantha',
      website: 'ramiro.info',
    };

    // when
    render(
      <CustomCard
        imgSrc={mockUser.avatar}
        title={mockUser.name}
        isFavorite={mockUser.isFavorite}
        onClickDelete={() => {}}
        onClickFavor={() => {}}
        onClickEdit={() => {}}
        description={
          <>
            <Row align="middle" gutter={10}>
              <Col>
                <MailOutlined rev="default" />
              </Col>
              <Col>
                <span>{mockUser.email}</span>
              </Col>
            </Row>
            <Row align="middle" gutter={10}>
              <Col>
                <PhoneOutlined rev="default" />
              </Col>
              <Col>
                <span>{mockUser.phone}</span>
              </Col>
            </Row>
            <Row align="middle" gutter={10}>
              <Col>
                <GlobalOutlined rev="default" />
              </Col>
              <Col>
                <span>{mockUser.website}</span>
              </Col>
            </Row>
          </>
        }
      />,
    );
    const heartFilled = screen.getByTestId('id-heart-filled');
    expect(heartFilled).toBeInTheDocument();
  });

  test('If favorite, the icon should be HeartFilled', async () => {
    // given
    const mockUser = {
      id: 3,
      avatar: 'https://avatars.dicebear.com/v2/avataaars/Samantha.svg?options[mood][]=happy',
      email: 'Nathan@yesenia.net',
      isFavorite: false,
      name: 'Clementine Bauch',
      phone: '1-463-123-4447',
      username: 'Samantha',
      website: 'ramiro.info',
    };

    // when
    render(
      <CustomCard
        imgSrc={mockUser.avatar}
        title={mockUser.name}
        isFavorite={mockUser.isFavorite}
        onClickDelete={() => {}}
        onClickFavor={() => {}}
        onClickEdit={() => {}}
        description={
          <>
            <Row align="middle" gutter={10}>
              <Col>
                <MailOutlined rev="default" />
              </Col>
              <Col>
                <span>{mockUser.email}</span>
              </Col>
            </Row>
            <Row align="middle" gutter={10}>
              <Col>
                <PhoneOutlined rev="default" />
              </Col>
              <Col>
                <span>{mockUser.phone}</span>
              </Col>
            </Row>
            <Row align="middle" gutter={10}>
              <Col>
                <GlobalOutlined rev="default" />
              </Col>
              <Col>
                <span>{mockUser.website}</span>
              </Col>
            </Row>
          </>
        }
      />,
    );
    const heartTwoTone = screen.getByTestId('id-heart-two-tone');
    expect(heartTwoTone).toBeInTheDocument();
  });
});
