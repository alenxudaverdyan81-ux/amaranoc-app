import React from 'react';

export default function Tnakner() {
  const cabins = [
    {
      id: 1,
      location: "Դիլիջան",
      guests: 8,
      price: "35,000",
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1762850175455--0.6550219483737489image.webp&w=1920&q=75",
      stars: 5
    },
    {
      id: 2,
      location: "Բջնի",
      guests: 6,
      price: "45,000",
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1720431645306--0.9258848613459756image.webp&w=1920&q=75",
      stars: null
    },
    {
      id: 3,
      location: "Աղվերան",
      guests: 6,
      price: "40,000",
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1778851438147--0.7702181808340376image.webp&w=1920&q=75",
      stars: 5
    },
    {
      id: 4,
      location: "Սևան",
      guests: 4,
      price: "30,000",
      img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1778583905192--0.2292717140199514image.webp&w=1920&q=75",
      stars: null
    }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '25px', padding: '20px 0' }}>
      {cabins.map((cabin) => (
        <div 
          key={cabin.id}
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
              src={cabin.img} 
              alt={cabin.location} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#718096', fontSize: '15px' }}>
                <i className="fa-solid fa-location-dot" style={{ color: '#ff7e42' }}></i>
                <span>{cabin.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#718096', fontSize: '15px' }}>
                <i className="fa-solid fa-users"></i>
                <span>{cabin.guests}</span>
              </div>
              {cabin.stars && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#ff7e42', color: '#fff', padding: '3px 8px', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold' }}>
                  <i className="fa-solid fa-star"></i>
                  <span>{cabin.stars}</span>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginTop: '10px' }}>
              <span style={{ fontSize: '20px', fontWeight: '800', color: '#1a202c' }}>{cabin.price} ֏</span>
              <span style={{ color: '#718096', fontSize: '13px' }}>/ գիշեր</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}