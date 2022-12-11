const items = [
  { name: "Book", price: 20, color: "Green" },
  { name: "Pencil", price: 2, color: "Black" },
  { name: "Computer", price: 1200, color: "Grey" },
  { name: "Phone", price: 380, color: "Light Blue" },
  { name: "Watch", price: 5000, color: "Golden" },
];

const mappedItems = items.map(
  (item) => `${item.color} ${item.name} - $${item.price}`
);

console.log(mappedItems);
