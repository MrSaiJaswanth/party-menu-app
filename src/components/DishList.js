import React from 'react';

const DishList = ({ dishes, selectedDishes, onSelect, onShowIngredients, onReadMore }) => {
  return (
    <div className="dish-list">
      {dishes.map(dish => (
        <div key={dish.id} className={`dish-card ${selectedDishes.includes(dish.id) ? 'selected' : ''}`}>
          <img
            src={dish.image}
            alt={dish.name}
            onClick={() => onReadMore(dish)}
            style={{ cursor: 'pointer' }}
          />
          <h3>{dish.name}</h3>
          <p>
            {dish.description.length > 50
              ? dish.description.slice(0, 50) + '...'
              : dish.description}
            {dish.description.length > 50 && (
              <span className="read-more" onClick={() => onReadMore(dish)}>Read More</span>
            )}
          </p>
          <div className="card-actions">

            <button
            className={selectedDishes.includes(dish.id) ? 'remove-btn' : 'add-btn'}
            onClick={() => onSelect(dish)}
          >
            {selectedDishes.includes(dish.id) ? 'Remove' : 'Add'}
          </button>
            <button className="ingredient-btn" onClick={() => onShowIngredients(dish)}>Ingredients</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DishList;
