import React from 'react';
import useCartStore from './pages/useCartStore';

export default function Card({ location, price, capacity, image, img, rating }) {
  const cartItems = useCartStore((state) => state.cartItems);
  const toggleFavorite = useCartStore((state) => state.toggleFavorite);
  
  const finalImage = image || img;
  const isLiked = cartItems.some(cartItem => cartItem.location === location);

  return (
    <div className="listing-card">
      <div className="card-image">
        <img src={finalImage} alt={location} />
        
        <button 
          className="wishlist-btn" 
          onClick={(e) => {
            e.preventDefault(); 
            toggleFavorite({ location, price, capacity, img: finalImage, rating });
          }}
          style={{ 
            color: isLiked ? '#ff4d4d' : 'white',
            transform: isLiked ? 'scale(1.2)' : 'scale(1)',
            transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), color 0.3s ease',
          }}
          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.8)'}
          onMouseUp={(e) => e.currentTarget.style.transform = isLiked ? 'scale(1.2)' : 'scale(1)'}
        >
          <i className={isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
        </button>
      </div>
      
      <div className="card-info">
        <div className="card-meta">
          <span className="location">
            <i className="fa-solid fa-location-dot"></i> {location}
          </span>
          <span className="capacity">
            <i className="fa-solid fa-users"></i> {capacity} անձ
          </span>
          {rating && (
            <span className="rating-badge">
              <i className="fa-solid fa-star"></i> {rating}
            </span>
          )}
        </div>
        <div className="card-footer">
          <span className="price">{price} ֏</span>
        </div>
      </div>
    </div>
  );s
}