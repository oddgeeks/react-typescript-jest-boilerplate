/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Favor } from '@/components/Favor';

describe('Favor component', () => {
  test('If favorite, the icon should be HeartFilled', () => {
    // given
    const dummyComponentProps = {
      key: 'test_favor',
      filled: true,
      onClick: () => {},
    };

    // when
    render(<Favor {...dummyComponentProps} />);
    const heartFilled = screen.getByTestId('id-heart-filled');

    // then
    expect(heartFilled).toBeInTheDocument();
  });

  test('If not favorite, the icon should be HeartTwoTone', () => {
    // given
    const dummyComponentProps = {
      key: 'test_favor',
      filled: false,
      onClick: () => {},
    };

    // when
    render(<Favor {...dummyComponentProps} />);
    const heartTwoTone = screen.getByTestId('id-heart-two-tone');

    // then
    expect(heartTwoTone).toBeInTheDocument();
  });
});
