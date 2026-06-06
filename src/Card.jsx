import React, { useState } from 'react';

export default function Card({ location, price, capacity, image, rating }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="listing-card">
      <div className="card-image">
        <img src={image} alt={location} />
        <button 
          className="wishlist-btn" 
          onClick={() => setIsFavorite(!isFavorite)}
          style={{ color: isFavorite ? 'red' : 'white' }}
        >
          <i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
        </button>
      </div>
      <div className="card-info">
        <div className="card-meta">
          <span className="location"><i className="fa-solid fa-location-dot"></i> {location}</span>
          <span className="capacity"><i className="fa-solid fa-users"></i> {capacity} անձ</span>
          {rating && <span className="rating-badge"><i className="fa-solid fa-star"></i> {rating}</span>}
        </div>
        <div className="card-footer">
          <span className="price">{price.toLocaleString()} ֏</span>
        </div>
      </div>
    </div>
  );
}