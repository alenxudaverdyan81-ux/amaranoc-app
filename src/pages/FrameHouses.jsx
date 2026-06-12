import React from 'react';
import Card from '../Card'; // Import-ը Card-ի համար

export default function FrameHouses() {
  const houses = [
    { id: 1, location: "Եղվարդ", guests: 30, price: "80,000", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600&auto=format&fit=crop", stars: null },
    { id: 2, location: "Բջնի", guests: 6, price: "45,000", img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&auto=format&fit=crop", stars: null },
    { id: 3, location: "Աշտարակ", guests: 25, price: "80,000", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&auto=format&fit=crop", stars: 5 },
    { id: 4, location: "Բյուրական", guests: 4, price: "39,000", img: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=600&auto=format&fit=crop", stars: null },
    { id: 5, location: "Գառնի", guests: 6, price: "45,000", img: "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=600&auto=format&fit=crop", stars: 5 },
    { id: 6, location: "Բյուրական", guests: 4, price: "29,000", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop", stars: null },
    { id: 7, location: "Ծաղկաձոր", guests: 8, price: "45,000", img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&auto=format&fit=crop", stars: 5 }
  ];

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h1>Frame Houses</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px', marginTop: '30px' }}>
        {houses.map((house) => (
          <Card 
            key={house.id}
            location={house.location}
            price={house.price}
            capacity={house.guests}
            image={house.img}
            rating={house.stars}
          />
        ))}
      </div>
    </div>
  );
}