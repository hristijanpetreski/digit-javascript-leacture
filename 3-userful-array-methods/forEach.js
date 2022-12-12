const items = [
  { name: 'Book', price: 20, color: 'Green' },
  { name: 'Pencil', price: 2, color: 'Black' },
  { name: 'Computer', price: 1200, color: 'Grey' },
  { name: 'Phone', price: 380, color: 'Light Blue' },
  { name: 'Watch', price: 5000, color: 'Golden' },
];

items.forEach((item, index) => {
  console.log(`Index: ${index}, Item: ${item.name}`);
});

function printItem(item) {
  console.log('printItem:', item);
}

items.forEach(printItem);
items.forEach(printItem);
