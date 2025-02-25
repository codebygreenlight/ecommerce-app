import React from 'react';
import { Card, Divider, Space } from 'antd';
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Meta } = Card;

const ProductCard = ({ image, name, description, price }) => {
  return (
    <Card
      hoverable
      style={{ 
        width: '100%', 
        marginBottom: 20,
        height: '400px',  // Fixed height for the card
        display: 'flex',
        flexDirection: 'column'
      }}
      cover={
        <img 
          alt={name} 
          src={image} 
          style={{ height: 200, objectFit: 'cover' }}
        />
      }
    >
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        justifyContent: 'space-between'
      }}>
        <div>
          <Meta 
            title={<div style={{ textAlign: 'left' }}>{name}</div>}
            description={
              <div style={{ 
                textAlign: 'left',
                height: '40px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical'
              }}>
                {description}
              </div>
            }
          />
          <div style={{ 
            marginTop: 12, 
            fontSize: '18px', 
            fontWeight: 'bold',
            textAlign: 'left' 
          }}>
            ${price}
          </div>
        </div>

        <div>
          <Divider style={{ margin: '12px 0' }}/>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <EyeOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
            <ShoppingCartOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard; 