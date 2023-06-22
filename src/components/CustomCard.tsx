import React from 'react';
import { Card, Image } from 'antd';
import { EditOutlined, DeleteFilled } from '@ant-design/icons';

import { Favor } from './Favor';

const { Meta } = Card;

interface CustomCardProps {
  imgSrc?: string;
  title: string;
  isFavorite: boolean;
  description: React.ReactNode;
  onClickDelete: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  onClickFavor: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  onClickEdit: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export const CustomCard: React.FC<CustomCardProps> = ({
  imgSrc,
  title,
  isFavorite = false,
  description,
  onClickDelete,
  onClickFavor,
  onClickEdit,
}) => {
  return (
    <Card
      className="shadow"
      cover={
        <Image
          alt="imgSrc"
          src={imgSrc}
          width="100%"
          preview={{
            src: imgSrc,
          }}
        />
      }
      actions={[
        <Favor key="favor" filled={isFavorite} onClick={onClickFavor} />,
        <EditOutlined rev="default" key="edit" onClick={onClickEdit} />,
        <DeleteFilled rev="default" key="delete" onClick={onClickDelete} />,
      ]}
    >
      <Meta title={title} description={description} />
    </Card>
  );
};
