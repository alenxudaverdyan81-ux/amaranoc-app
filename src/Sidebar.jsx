import React from 'react';

export default function Sidebar({ selectedRegions, setSelectedRegions, priceRange, setPriceRange, capacity, setCapacity }) {
  const handleRegionChange = (region) => {
    if (selectedRegions.includes(region)) {
      setSelectedRegions(selectedRegions.filter(r => r !== region));
    } else {
      setSelectedRegions([...selectedRegions, region]);
    }
  };

  return (
    <aside className="sidebar-filters">
      <div className="filter-group">
        <h3>Տարածաշրջան</h3>
        <div className="checkbox-list">
          {['Դիլիջան', 'Ծաղկաձոր', 'Գառնի', 'Աշտարակ', 'Երևան'].map((region) => (
            <label key={region}>
              <input 
                type="checkbox" 
                checked={selectedRegions.includes(region)}
                onChange={() => handleRegionChange(region)}
              /> {region}
            </label>
          ))}
        </div>
      </div>
      <div className="filter-group">
        <h3>Արժեք (֏)</h3>
        <div className="price-inputs">
          <input 
            type="number" 
            placeholder="Սկսած" 
            value={priceRange.min}
            onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
          />
          <span>-</span>
          <input 
            type="number" 
            placeholder="Մինչև" 
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
          />
        </div>
      </div>
      <div className="filter-group">
        <h3>Մարդկանց թույլատրելի քանակ</h3>
        <div className="quantity-selector">
          <button onClick={() => setCapacity(capacity > 1 ? capacity - 1 : 1)}>-</button>
          <input type="text" value={capacity} readOnly />
          <button onClick={() => setCapacity(capacity + 1)}>+</button>
        </div>
      </div>
    </aside>
  );
}