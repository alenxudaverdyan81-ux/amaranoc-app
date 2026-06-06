import React from 'react';

export default function FrameHouses() {
  const houses = [
    {
      id: 1,
      location: "Եղվարդ",
      guests: 30,
      price: "80,000",
      img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600&auto=format&fit=crop",
      stars: null
    },
    {
      id: 2,
      location: "Բջնի",
      guests: 6,
      price: "45,000",
      img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&auto=format&fit=crop",
      stars: null
    },
    {
      id: 3,
      location: "Աշտարակ",
      guests: 25,
      price: "80,000",
      img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&auto=format&fit=crop",
      stars: 5
    },
    {
      id: 4,
      location: "Բյուրական",
      guests: 4,
      price: "39,000",
      img: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=600&auto=format&fit=crop",
      stars: null
    },
    {
      id: 5,
      location: "Գառնի",
      guests: 6,
      price: "45,000",
      img: "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=600&auto=format&fit=crop",
      stars: 5
    },
    {
      id: 6,
      location: "Բյուրական",
      guests: 4,
      price: "29,000",
      img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop",
      stars: null
    },
    {
      id: 7,
      location: "Ծաղկաձոր",
      guests: 8,
      price: "45,000",
      img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&auto=format&fit=crop",
      stars: 5
    }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '25px', padding: '20px 0' }}>
      {houses.map((house) => (
        <div 
          key={house.id}
          style={{
            backgroundColor: '#fff',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            position: 'relative',
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div style={{ position: 'absolute', top: '15px', right: '15px', zIndex: 2, backgroundColor: 'rgba(255,255,255,0.8)', padding: '8px', borderRadius: '50%' }}>
            <i className="fa-regular fa-heart" style={{ color: '#718096', fontSize: '16px' }}></i>
          </div>

          <div style={{ width: '100%', height: '240px', overflow: 'hidden' }}>
            <img 
              src={house.img} 
              alt={house.location} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#718096', fontSize: '15px' }}>
                <i className="fa-solid fa-location-dot" style={{ color: '#ff7e42' }}></i>
                <span>{house.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#718096', fontSize: '15px' }}>
                <i className="fa-solid fa-users"></i>
                <span>{house.guests}</span>
              </div>
              {house.stars && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#ff7e42', color: '#fff', padding: '3px 8px', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold' }}>
                  <i className="fa-solid fa-star"></i>
                  <span>{house.stars}</span>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginTop: '10px' }}>
              <span style={{ fontSize: '20px', fontWeight: '800', color: '#1a202c' }}>{house.price} ֏</span>
              <span style={{ color: '#718096', fontSize: '13px' }}>/ գիշեր</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}