export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description?: string;
  category: string;
  isPopular?: boolean;
}

export const menuItems: MenuItem[] = [
  // Breakfast & Pastries
  { id: '1', name: 'Butter Croissant', price: '$200', category: 'Breakfast & Pastries', isPopular: true },
  { id: '2', name: 'Chocolate Croissant', price: '$,500', category: 'Breakfast & Pastries', isPopular: true },
  { id: '3', name: 'Cinnamon Roll', price: '$,300', category: 'Breakfast & Pastries' },
  { id: '4', name: 'Banana Bread Slice', price: '$1,000', category: 'Breakfast & Pastries' },
  { id: '5', name: 'Blueberry Muffin', price: '$1,200', category: 'Breakfast & Pastries', isPopular: true },
  { id: '6', name: 'Cheese Danish', price: '$1,400', category: 'Breakfast & Pastries' },
  { id: '7', name: 'Toast & Jam', price: '$900', category: 'Breakfast & Pastries' },
  { id: '8', name: 'Pancake Stack', price: '$800', category: 'Breakfast & Pastries' },
  
  // Light Meals
  { id: '9', name: 'Club Sandwich', price: '$,500', category: 'Light Meals', isPopular: true },
  { id: '10', name: 'Chicken Sandwich', price: '$200', category: 'Light Meals' },
  { id: '11', name: 'Veggie Sandwich', price: '$100', category: 'Light Meals' },
  { id: '12', name: 'Beef Burger', price: '$500', category: 'Light Meals', isPopular: true },
  { id: '13', name: 'Chicken Burger', price: '$800', category: 'Light Meals' },
  { id: '14', name: 'French Fries', price: '$500', category: 'Light Meals', isPopular: true },
  { id: '15', name: 'Meat Pie', price: '$800', category: 'Light Meals' },
  { id: '16', name: 'Sausage Roll', price: '$700', category: 'Light Meals' },
  { id: '17', name: 'Spring Rolls', price: '$200', category: 'Light Meals' },
];

export const getFeaturedMenuItems = () => menuItems.filter(item => item.isPopular);
