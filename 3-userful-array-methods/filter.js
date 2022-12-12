const items = [
  { name: 'Book', price: 20, color: 'Green' },
  { name: 'Pencil', price: 2, color: 'Black' },
  { name: 'Computer', price: 1200, color: 'Grey' },
  { name: 'Phone', price: 380, color: 'Light Blue' },
  { name: 'Watch', price: 5000, color: 'Golden' },
];

const filteredItems = items.filter(
  (item) => item.price > 100 && item.price <= 2000
);

console.log(filteredItems);
