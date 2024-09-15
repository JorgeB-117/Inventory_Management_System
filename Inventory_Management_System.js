// Task 1: Create an Inventory Array of Product Objects

const Inventory = [
    {name: "Laptop", price: 1500, quantity: 20, lowStockLevel: 5},
    {name: "Phone", price: 1000, quantity: 40, lowStockLevel: 10},
    {name: "Tablet", price: 1250, quantity: 30, lowStockLevel: 5},
    {name: "Headphones", price: 300, quantity: 60, lowStockLevel: 15},
    {name: "Speaker", price: 200, quantity: 70, lowStockLevel: 20},
];


// Task 2: Create a Function to Display Product Details

function displayProductDetails(products){
    const status = products.quantity <= products.lowStockLevel ? "low in stock" : "in stock"
    return (`${products.name}, Price: $${products.price}, Quantity: ${products.quantity}, product is ${status}`);
};

console.log(displayProductDetails(Inventory[0]));

//Test function works, everything is displayed and when number is changed, the correct output exists. 


// Task 3: Create a Function to Update Product Stock After Sales

function updateStock(Inventory, unitsSold){
    Inventory.quantity -= unitsSold;
if (Inventory.quantity <= 0) {
    console.log(`${Inventory.name} is now out of stock`); 
}
else if (Inventory.lowStockLevel >= Inventory.quantity){
    console.log(`${Inventory.name} is now low stock`);
}
};

//Test function works correctly, quantity is 3. 
updateStock(Inventory[0],17);
displayProductDetails(Inventory[0]);

