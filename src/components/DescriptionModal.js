import React from 'react';

function DescriptionModal({ dish, onClose, onSelect, isSelected, onShowIngredients }) {
  if (!dish) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Dish Image */}
        {dish.image && (
          <img
            src={dish.image}
            alt={dish.name}
            className="modal-dish-image"
          />
        )}

        <h2>{dish.name}</h2>
        <p>{dish.description}</p>

        {/* Buttons */}
        <div className="modal-buttons">
          <button
            className={isSelected ? 'remove-btn' : 'add-btn'}
            onClick={() => onSelect(dish)}
          >
            {isSelected ? 'Remove' : 'Add'}
          </button>

          <button
            className="ingredient-btn"
            onClick={() => {
              onShowIngredients(dish);
              onClose(); // optional: close description modal when opening ingredients
            }}
          >
            Ingredients
          </button>
        

        <button onClick={onClose} className="close-btn">
          Close
        </button>
        </div>
      </div>
    </div>
  );
}

export default DescriptionModal;
