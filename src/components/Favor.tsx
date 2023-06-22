import React from 'react';
import { HeartTwoTone, HeartFilled } from '@ant-design/icons';

interface FavorProps {
  filled?: boolean;
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export const Favor: React.FC<FavorProps> = ({ filled = false, color = '#eb2f96', onClick }) => {
  return (
    <span onClick={onClick}>
      {(filled === true && <HeartFilled rev="default" style={{ color }} />) || (
        <HeartTwoTone rev="default" twoToneColor={color} />
      )}
    </span>
  );
};
