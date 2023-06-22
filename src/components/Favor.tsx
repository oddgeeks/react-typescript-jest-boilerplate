import React from 'react';
import { HeartTwoTone, HeartFilled } from '@ant-design/icons';

interface FavorProps {
  filled?: boolean;
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export const Favor: React.FC<FavorProps> = ({ filled = false, color = '#eb2f96', onClick }) => {
  return (
    <span data-testid="id-btn-favorite" onClick={onClick}>
      {(filled === true && <HeartFilled data-testid="id-heart-filled" rev="default" style={{ color }} />) || (
        <HeartTwoTone data-testid="id-heart-two-tone" rev="default" twoToneColor={color} />
      )}
    </span>
  );
};
