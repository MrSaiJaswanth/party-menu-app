import React from 'react';

function IngredientModal({ dish, onClose }) {
  if (!dish) return null;

  return (
    <div
      className="modal-overlay"
       onClick={onClose}// clicking on overlay closes modal
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
      >
        <h2>{dish.name}</h2>
        <p>{dish.description}</p>

        <h4>Ingredients:</h4>
        <ul className="ingredient-list">
          {dish.ingredients && dish.ingredients.length > 0 ? (
            dish.ingredients.map((item, index) => (
              <li key={index}>
                <span className="ingredient-name">{item.name}</span>
                <span className="ingredient-qty">{item.quantity}</span>
              </li>
            ))
          ) : (
            <li>No ingredients data available.</li>
          )}
        </ul>

        <button onClick={onClose} className="close-btn">
          Close
        </button>
      </div>
    </div>
  );
}

export default IngredientModal;
