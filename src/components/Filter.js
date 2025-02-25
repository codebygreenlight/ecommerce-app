import React from 'react';
import { Input, Select, Slider, InputNumber, Button, Space, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;

const Filter = () => {
  const [priceFrom, setPriceFrom] = React.useState(0);
  const [priceTo, setPriceTo] = React.useState(1000);

  return (
    <div style={{ 
      padding: '20px 0', 
      backgroundColor: '#ffffff', 
      marginBottom: '20px',
      marginTop: 0
    }}>
      <Row align="middle" justify="center" style={{ flexWrap: 'nowrap' }}>
        <Col style={{ marginRight: '15px' }}>
          <Input 
            placeholder="Enter keyword" 
            prefix={<SearchOutlined />}
            size="large"
            style={{ width: '200px' }}
          />
        </Col>
        
        <Col style={{ marginRight: '15px' }}>
          <Select
            placeholder="Select Category"
            style={{ width: '200px' }}
            size="large"
          >
            <Option value="electronics">Burger</Option>
            <Option value="clothing">Pizza</Option>
            <Option value="books">Salad</Option>
            <Option value="home">Soda</Option>
          </Select>
        </Col>

        <Col style={{ marginRight: '15px' }}>
          <Space align="center">
            <span>Price From:</span>
            <Slider
              min={0}
              max={1000}
              value={priceFrom}
              onChange={(value) => setPriceFrom(value)}
              style={{ width: '100px' }}
            />
            <InputNumber
              min={0}
              max={1000}
              value={priceFrom}
              onChange={(value) => setPriceFrom(value)}
              style={{ width: '80px' }}
              size="large"
            />
          </Space>
        </Col>

        <Col style={{ marginRight: '15px' }}>
          <Space align="center">
            <span>Price To:</span>
            <Slider
              min={0}
              max={1000}
              value={priceTo}
              onChange={(value) => setPriceTo(value)}
              style={{ width: '100px' }}
            />
            <InputNumber
              min={0}
              max={1000}
              value={priceTo}
              onChange={(value) => setPriceTo(value)}
              style={{ width: '80px' }}
              size="large"
            />
          </Space>
        </Col>

        <Col>
          <Space>
            <Button type="primary" size="large" icon={<SearchOutlined />}>
              Search
            </Button>
            <Button size="large">
              Clear
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Filter; 