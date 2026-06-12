import React from 'react';
import useCartStore from './useCartStore';
import Card from '../Card';

export default function Zambyux() {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <div className="zambyux-page container" style={{ padding: '40px 20px', minHeight: '60vh' }}>
      <h2 style={{ marginBottom: '20px', color: '#1a202c', textAlign: 'center' }}>
        ({cartItems.length})
      </h2>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '50px', color: '#718096' }}>
          <h3>Ձեր զամբյուղը դատարկ է:</h3>
          <p>Գլխավոր էջում սեղմեք սրտիկին՝ տներ ավելացնելու համար:</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '25px',
          marginTop: '30px'
        }}>
          {cartItems.map((item, index) => (
            <Card 
              key={index}
              location={item.location}
              price={item.price}
              capacity={item.capacity}
              img={item.img}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}