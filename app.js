const readlineSync = require('readline-sync');

// Sample item data
const items = [
  { name: 'Item 1', price: 10.99 },
  { name: 'Item 2', price: 19.99 },
  // Add more items as needed
];

function displayItems() {
  console.log('Available Items:');
  items.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - $${item.price}`);
  });
}

function getUserInput() {
  return readlineSync.question('Enter the item number you want to purchase: ');
}

// Main logic
function main() {
  displayItems();
  const userInput = getUserInput();

  // Process user input and perform actions accordingly
  // ...

  console.log('Thank you for using the e-commerce console app!');
}

// Run the application
main();