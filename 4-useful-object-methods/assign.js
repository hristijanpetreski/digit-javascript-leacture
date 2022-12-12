const items = [
  { name: 'Book', price: 20, color: 'Green' },
  { name: 'Pencil', price: 2, color: 'Black' },
  { name: 'Computer', price: 1200, color: 'Grey' },
  { name: 'Phone', price: 380, color: 'Light Blue' },
  { name: 'Watch', price: 5000, color: 'Golden' },
];

const heroes = ['Captain America', 'Iron Man', 'Thor', 'Black Panther', 'Hulk'];

const emptyObj = {
  randomValue: 5,
};

const resultObject = Object.assign(
  emptyObj,
  { items },
  { heroes },
  { name: 'GrabIT' }
);

resultObject.randomValue = 70;

console.log(Object.values(emptyObj));
// console.log(resultObj === emptyObj); -> prints true
