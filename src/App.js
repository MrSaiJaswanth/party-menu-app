import React, { useState, useRef, useEffect } from 'react';
import DishList from './components/DishList';
import IngredientModal from './components/IngredientModal';
import DescriptionModal from './components/DescriptionModal';
import { mockDishes } from './data/mockDishes';
import { filterDishes } from './filter';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('starter');
  const [searchTerm, setSearchTerm] = useState('');
  const [vegActive, setVegActive] = useState(false);
  const [nonVegActive, setNonVegActive] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [showIngredient, setShowIngredient] = useState(null);
  const [showDescription, setShowDescription] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [showContinueModal, setShowContinueModal] = useState(false);


  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Add/remove dishes from selection
  const handleSelect = (dish) => {
    setSelectedDishes((prev) =>
      prev.includes(dish.id)
        ? prev.filter(id => id !== dish.id)
        : [...prev, dish.id]
    );
  };

  // Toggle veg/non-veg filters
  const handleToggle = (type) => {
    if (type === 'veg') setVegActive(prev => !prev);
    if (type === 'non-veg') setNonVegActive(prev => !prev);
  };

  // Flatten all dishes for global search
  const allDishes = Object.values(mockDishes).flat();

  // Determine dishes to display
  const dishesToDisplay = searchTerm
    ? filterDishes(allDishes, searchTerm, vegActive, nonVegActive)
    : filterDishes(mockDishes[selectedCategory], '', vegActive, nonVegActive);

  // Count selected dishes in each category
  const countInCategory = (category) =>
    mockDishes[category].filter(dish => selectedDishes.includes(dish.id)).length;

  const totalSelected = selectedDishes.length;

  return (
    <div className="App">
      {/* ===================== Fixed Header ===================== */}
      <div className="fixed-header" ref={headerRef}>
        <div className="header-top">
          <h1>Party Menu</h1>
          <input
            type="text"
            className="search-bar"
            placeholder="Search dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* Veg/Non-Veg toggles */}
          <div className="header-toggles">
            <div className="filter-item" onClick={() => handleToggle('veg')}>
              <span>Veg</span>
              <div className={`toggle-switch ${vegActive ? 'active' : ''}`}>
                <div className="slider"></div>
              </div>
            </div>
            <div className="filter-item" onClick={() => handleToggle('non-veg')}>
              <span>Non-Veg</span>
              <div className={`toggle-switch ${nonVegActive ? 'active' : ''}`}>
                <div className="slider"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="tabs">
            {['starter', 'maincourse', 'dessert', 'sides'].map(cat => (
              <button
                key={cat}
                className={selectedCategory === cat ? 'active' : ''}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)} ({countInCategory(cat)})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ===================== Scrollable Content ===================== */}
      <div
        className="content-wrapper"
        style={{ paddingTop: headerHeight + 10 }}
      >
        <DishList
          dishes={dishesToDisplay}
          selectedDishes={selectedDishes}
          onSelect={handleSelect}
          onShowIngredients={setShowIngredient}
          onReadMore={setShowDescription}
        />
      </div>

      {/* ===================== Fixed Footer ===================== */}
      <div className="fixed-footer">
        <p>Total Selected Dishes: {totalSelected}</p>
        <button onClick={() => setShowContinueModal(true)}>Continue</button>
      </div>

      {/* ===================== Modals ===================== */}
      {showIngredient && (
        <IngredientModal
          dish={showIngredient}
          onClose={() => setShowIngredient(null)}
        />
      )}

{showDescription && (
  <DescriptionModal
    dish={showDescription}
    onClose={() => setShowDescription(null)}
    onSelect={handleSelect}
    isSelected={selectedDishes.includes(showDescription.id)}
    onShowIngredients={setShowIngredient}
  />
)}
{showContinueModal && (
  <div className="modal-overlay">
    <div className="modal-content">
      <h3>Thank you!</h3>
      <p>Our operator will contact you shortly.</p>
      <button className="close-btn" onClick={() => setShowContinueModal(false)}>Close</button>
    </div>
  </div>
)}

    </div>
  );
}

export default App;
