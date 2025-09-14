export const mockDishes = {
    starter: [
      {
        id: 1,
        categoryId: 101,
        mealType: "starter",
        type: "veg",
        description: "Spicy garlic mushrooms are a bold and flavorful Indo-Chinese dish known for its rich, aromatic, and spicy taste.",
        image: "/images/starter1.jpg",
        category: { id: 101, name: "Starters", image: "/images/starter-category.jpg" },
        dishType: "appetizer",
        forChefit: true,
        forParty: true,
        nameHi: "स्पाइसी गार्लिक मशरूम्स",
        nameBn: "স্পাইসি গার্লিক মাশরুম",
        name: "Spicy Garlic Mushrooms",
        ingredients: [
          { name: "Mushrooms", quantity: "200g" },
          { name: "Garlic", quantity: "2 cloves" },
          { name: "Herbs", quantity: "1 tsp" }
        ]
      },
      {
        id: 2,
        categoryId: 101,
        mealType: "starter",
        type: "non-veg",
        description: "Chicken wings are a versatile and beloved appetizer or main dish known for their crispy skin, juicy meat, and adaptability to a wide range of sauces and seasonings.",
        image: "/images/starter2.jpg",
        category: { id: 101, name: "Starters", image: "/images/starter-category.jpg" },
        dishType: "appetizer",
        forChefit: false,
        forParty: true,
        nameHi: "चिकन विंग्स",
        nameBn: "চিকেন উইংস",
        name: "Chicken Wings",
        ingredients: [
          { name: "Chicken", quantity: "300g" },
          { name: "Chili Sauce", quantity: "2 tbsp" }
        ]
      },
      {
        id: 3,
        categoryId: 101,
        mealType: "starter",
        type: "veg",
        description: "Paneer tikka is a popular Indian appetizer featuring chunks of paneer and vegetables that are marinated in a spiced yogurt mixture and then grilled until lightly charred.",
        image: "/images/starter3.jpg",
        category: { id: 101, name: "Starters", image: "/images/starter-category.jpg" },
        dishType: "appetizer",
        forChefit: true,
        forParty: false,
        nameHi: "पनीर टिक्का",
        nameBn: "পনির টিক্কা",
        name: "Paneer Tikka",
        ingredients: [
          { name: "Paneer", quantity: "200g" },
          { name: "Yogurt", quantity: "2 tbsp" },
          { name: "Spices", quantity: "1 tsp" }
        ]
      },
      {
        id: 4,
        categoryId: 101,
        mealType: "starter",
        type: "non-veg",
        description: "Chicken tandoori is a classic Indian dish of chicken marinated in a spiced yogurt mixture and roasted.",
        image: "/images/starter4.jpg",
        category: { id: 101, name: "Starters", image: "/images/starter-category.jpg" },
        dishType: "appetizer",
        forChefit: false,
        forParty: true,
        nameHi: "तंदूरी चिकन",
        nameBn: "তন্দুরি চিকেন",
        name: "Tandoori Chicken",
        ingredients: [
          { name: "Chicken", quantity: "300g" },
          { name: "Spices", quantity: "2 tsp" },
          { name: "Lemon", quantity: "1" }
        ]
      }
    ],
  
    maincourse: [
      {
        id: 5,
        categoryId: 102,
        mealType: "maincourse",
        type: "veg",
        description: "Creamy tomato-based curry with paneer.",
        image: "/images/main1.jpg",
        category: { id: 102, name: "Main Course", image: "/images/main-category.jpg" },
        dishType: "entree",
        forChefit: true,
        forParty: true,
        nameHi: "पनीर बटर मसाला",
        nameBn: "পনির বাটার মসলা",
        name: "Paneer Butter Masala",
        ingredients: [
          { name: "Paneer", quantity: "200g" },
          { name: "Butter", quantity: "2 tbsp" },
          { name: "Tomato Puree", quantity: "1 cup" }
        ]
      },
      {
        id: 6,
        categoryId: 102,
        mealType: "maincourse",
        type: "non-veg",
        description: "Fragrant spiced chicken biryani.",
        image: "/images/main2.jpg",
        category: { id: 102, name: "Main Course", image: "/images/main-category.jpg" },
        dishType: "entree",
        forChefit: false,
        forParty: true,
        nameHi: "चिकन बिरयानी",
        nameBn: "চিকেন বিরিয়ানি",
        name: "Chicken Biryani",
        ingredients: [
          { name: "Chicken", quantity: "300g" },
          { name: "Rice", quantity: "200g" },
          { name: "Spices", quantity: "2 tsp" }
        ]
      },
      {
        id: 7,
        categoryId: 102,
        mealType: "maincourse",
        type: "veg",
        description: "Fragrant mixed vegetable biryani.",
        image: "/images/main3.jpg",
        category: { id: 102, name: "Main Course", image: "/images/main-category.jpg" },
        dishType: "entree",
        forChefit: true,
        forParty: false,
        nameHi: "मिक्स वेज बिरयानी",
        nameBn: "মিক্স ভেজ বিরিয়ানি",
        name: "Mixed Veg Biryani",
        ingredients: [
          { name: "Rice", quantity: "200g" },
          { name: "Vegetables", quantity: "150g" },
          { name: "Spices", quantity: "2 tsp" }
        ]
      },
      {
        id: 8,
        categoryId: 102,
        mealType: "maincourse",
        type: "non-veg",
        description: "Lemon marinated grilled fish.",
        image: "/images/main4.jpg",
        category: { id: 102, name: "Main Course", image: "/images/main-category.jpg" },
        dishType: "entree",
        forChefit: false,
        forParty: true,
        nameHi: "ग्रिल्ड फिश",
        nameBn: "গ্রিলড ফিশ",
        name: "Grilled Fish",
        ingredients: [
          { name: "Fish Fillet", quantity: "250g" },
          { name: "Lemon", quantity: "1" },
          { name: "Olive Oil", quantity: "1 tbsp" }
        ]
      }
    ],
  
    dessert: [
      {
        id: 9,
        categoryId: 103,
        mealType: "dessert",
        type: "veg",
        description: "Sweet deep-fried balls in syrup.",
        image: "/images/dessert1.jpg",
        category: { id: 103, name: "Desserts", image: "/images/dessert-category.jpg" },
        dishType: "sweet",
        forChefit: true,
        forParty: false,
        nameHi: "गुलाब जामुन",
        nameBn: "গুলাব জামুন",
        name: "Gulab Jamun",
        ingredients: [
          { name: "Milk Powder", quantity: "100g" },
          { name: "Sugar", quantity: "1 cup" },
          { name: "Cardamom", quantity: "1 tsp" }
        ]
      },
      {
        id: 10,
        categoryId: 103,
        mealType: "dessert",
        type: "veg",
        description: "Apricot flavored chocolate delight.",
        image: "/images/dessert2.jpg",
        category: { id: 103, name: "Desserts", image: "/images/dessert-category.jpg" },
        dishType: "sweet",
        forChefit: false,
        forParty: true,
        nameHi: "एप्रिकॉट डिलाइट",
        nameBn: "এপ্রিকট ডিলাইট",
        name: "Apricot Delight",
        ingredients: [
          { name: "Dark Chocolate", quantity: "100g" },
          { name: "Apricot", quantity: "50g" },
          { name: "Cream", quantity: "1 cup" }
        ]
      },
      {
        id: 11,
        categoryId: 103,
        mealType: "dessert",
        type: "veg",
        description: "Vanilla ice cream with toppings.",
        image: "/images/dessert3.jpg",
        category: { id: 103, name: "Desserts", image: "/images/dessert-category.jpg" },
        dishType: "sweet",
        forChefit: true,
        forParty: true,
        nameHi: "वेनिला आइसक्रीम",
        nameBn: "ভ্যানিলা আইসক্রিম",
        name: "Vanilla Ice Cream",
        ingredients: [
          { name: "Milk", quantity: "200ml" },
          { name: "Vanilla Essence", quantity: "1 tsp" },
          { name: "Sugar", quantity: "2 tbsp" }
        ]
      },
      {
        id: 12,
        categoryId: 103,
        mealType: "dessert",
        type: "veg",
        description: "Fresh fruit salad with honey.",
        image: "/images/dessert4.jpg",
        category: { id: 103, name: "Desserts", image: "/images/dessert-category.jpg" },
        dishType: "sweet",
        forChefit: false,
        forParty: true,
        nameHi: "फल सलाद",
        nameBn: "ফল সালাদ",
        name: "Fruit Salad",
        ingredients: [
          { name: "Apple", quantity: "1" },
          { name: "Banana", quantity: "1" },
          { name: "Honey", quantity: "1 tbsp" }
        ]
      }
    ],
  
    sides: [
      {
        id: 13,
        categoryId: 104,
        mealType: "sides",
        type: "veg",
        description: "Bread with garlic butter.",
        image: "/images/sides1.jpg",
        category: { id: 104, name: "Sides", image: "/images/sides-category.jpg" },
        dishType: "side",
        forChefit: true,
        forParty: true,
        nameHi: "लहसुन ब्रेड",
        nameBn: "রসুন ব্রেড",
        name: "Garlic Bread",
        ingredients: [
          { name: "Bread", quantity: "2 slices" },
          { name: "Garlic Butter", quantity: "2 tbsp" }
        ]
      },
      {
        id: 14,
        categoryId: 104,
        mealType: "sides",
        type: "non-veg",
        description: "Crispy fried fish pieces.",
        image: "/images/sides2.jpg",
        category: { id: 104, name: "Sides", image: "/images/sides-category.jpg" },
        dishType: "side",
        forChefit: false,
        forParty: false,
        nameHi: "फ्राइड फिश पीस",
        nameBn: "ফ্রাইড ফিশ পিস",
        name: "Fried Fish Piece",
        ingredients: [
          { name: "Fish", quantity: "200g" },
          { name: "Breadcrumbs", quantity: "1 cup" }
        ]
      },
      {
        id: 15,
        categoryId: 104,
        mealType: "sides",
        type: "veg",
        description: "Crispy veg manchuria with sauce.",
        image: "/images/sides3.jpg",
        category: { id: 104, name: "Sides", image: "/images/sides-category.jpg" },
        dishType: "side",
        forChefit: true,
        forParty: true,
        nameHi: "वेज मंचूरियन",
        nameBn: "ভেজ মঞ্চুরিয়ান",
        name: "Veg Manchuria",
        ingredients: [
          { name: "Vegetables", quantity: "200g" },
          { name: "Sauce", quantity: "2 tbsp" },
          { name: "Cornflour", quantity: "1 tsp" }
        ]
      },
      {
        id: 16,
        categoryId: 104,
        mealType: "sides",
        type: "non-veg",
        description: "Crispy chicken bites.",
        image: "/images/sides4.jpg",
        category: { id: 104, name: "Sides", image: "/images/sides-category.jpg" },
        dishType: "side",
        forChefit: false,
        forParty: true,
        nameHi: "चिकन नगेट्स",
        nameBn: "চিকেন নাগেটস",
        name: "Chicken Nuggets",
        ingredients: [
          { name: "Chicken", quantity: "200g" },
          { name: "Breadcrumbs", quantity: "1 cup" }
        ]
      }
    ]
  };
  