import React from 'react';
import Card from '../Card'; 

export default function Tnakner() {
  const cabins = [
    { id: 1, location: "Դիլիջան", guests: 8, price: "35,000", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1762850175455--0.6550219483737489image.webp&w=1920&q=75", stars: 5 },
    { id: 2, location: "Բջնի", guests: 6, price: "45,000", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1720431645306--0.9258848613459756image.webp&w=1920&q=75", stars: null },
    { id: 3, location: "Աղվերան", guests: 6, price: "40,000", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1778851438147--0.7702181808340376image.webp&w=1920&q=75", stars: 5 },
    { id: 4, location: "Սևան", guests: 4, price: "30,000", img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1778583905192--0.2292717140199514image.webp&w=1920&q=75", stars: null }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px', padding: '20px 0' }}>
      {cabins.map((cabin) => (
        <Card 
          key={cabin.id}
          location={cabin.location}
          price={cabin.price}
          capacity={cabin.guests}
          image={cabin.img}
          rating={cabin.stars}
        />
      ))}
    </div>
  );
}