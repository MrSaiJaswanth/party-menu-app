import React from 'react';

function DishCard({ dish, isSelected, onSelect, onShowIngredients, onReadMore }) {
  const maxLength = 100;
  const isLong = dish.description.length > maxLength;

  const displayText = isLong ? (
    <>
      {dish.description.slice(0, maxLength)} 
      <span 
        onClick={() => onReadMore(dish)} 
        style={{ color: '#007bff', cursor: 'pointer', fontWeight: '600', marginLeft: '5px' }}
      >
        Read More
      </span>
    </>
  ) : dish.description;

  return (
    <div className={`dish-card ${isSelected ? 'selected' : ''}`}>
      <img
        src={dish.image || 'https://via.placeholder.com/150'}
        alt={dish.name}
        onClick={() => onReadMore(dish)}
        style={{ cursor: 'pointer' }}
      />
      <h3>{dish.name}</h3>
      <p>{displayText}</p>

      <div className="dish-card-buttons">
        <button
          className={isSelected ? 'remove-btn' : 'add-btn'}
          onClick={() => onSelect(dish)}
        >
          {isSelected ? 'Remove' : 'Add'}
        </button>

        <button
          className="ingredient-btn"
          onClick={() => onShowIngredients(dish)}
        >
          Ingredients
        </button>
      </div>
    </div>
  );
}

export default DishCard;
