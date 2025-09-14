
export const filterDishes = (dishes, searchTerm, vegActive, nonVegActive) => {
  return dishes.filter(dish => {
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());

    if (!vegActive && !nonVegActive) {
      return matchesSearch;
    } else if (vegActive && !nonVegActive) {
      return matchesSearch && dish.type === 'veg';
    } else if (!vegActive && nonVegActive) {
      return matchesSearch && dish.type === 'non-veg';
    } else {
      return matchesSearch;
    }
  });
};
