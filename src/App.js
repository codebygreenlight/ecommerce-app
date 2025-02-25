import './App.css';
import 'antd/dist/reset.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Filter from './components/Filter';
import ProductCard from './components/ProductCard';
import { Row, Col, Button } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { useState } from 'react';

function App() {
  const [showAll, setShowAll] = useState(false);

  const products = [
    {
      id: 1,
      image: '/product1.jpg',
      name: 'Classic Burger',
      description: 'Juicy beef patty with fresh vegetables',
      price: '9.99'
    },
    {
      id: 2,
      image: '/product2.jpg',
      name: 'Pepperoni Pizza',
      description: 'Traditional pizza with pepperoni and cheese',
      price: '14.99'
    },
    {
      id: 3,
      image: '/product3.jpg',
      name: 'Caesar Salad',
      description: 'Fresh romaine lettuce with caesar dressing',
      price: '7.99'
    },
    {
      id: 4,
      image: '/product4.jpg',
      name: 'Chicken Wings',
      description: 'Crispy wings with special sauce',
      price: '11.99'
    },
    {
      id: 5,
      image: '/product5.jpg',
      name: 'Pasta Carbonara',
      description: 'Creamy pasta with bacon and parmesan',
      price: '13.99'
    },
    {
      id: 6,
      image: '/product6.jpg',
      name: 'Fish & Chips',
      description: 'Crispy fish fillet with french fries',
      price: '12.99'
    },
    {
      id: 7,
      image: '/product7.jpg',
      name: 'Vegetable Stir Fry',
      description: 'Mixed vegetables in savory sauce',
      price: '10.99'
    },
    {
      id: 8,
      image: '/product8.jpg',
      name: 'Ice Cream Sundae',
      description: 'Vanilla ice cream with toppings',
      price: '6.99'
    }
  ];

  const displayedProducts = showAll ? products : products.slice(0, 4);

  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Hero />
        <Filter />
        <div className="products-section">
          <Row gutter={[24, 24]}>
            {displayedProducts.map(product => (
              <Col xs={24} sm={12} md={6} key={product.id}>
                <ProductCard {...product} />
              </Col>
            ))}
          </Row>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            {showAll ? (
              <UpOutlined style={{ fontSize: '20px', color: 'black', marginBottom: '5px' }} />
            ) : (
              <DownOutlined style={{ fontSize: '20px', color: 'black', marginBottom: '5px' }} />
            )}
            <Button 
              type="text" 
              onClick={() => setShowAll(!showAll)}
              style={{ 
                color: 'black',
                padding: 0,
                height: 'auto'
              }}
            >
              {showAll ? 'Show Less' : 'Load More'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
