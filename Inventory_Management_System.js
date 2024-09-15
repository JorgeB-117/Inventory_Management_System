// Task 1: Create an Inventory Array of Product Objects

const Inventory = [
    {name: "Laptop", price: 1500, quantity: 20, lowStockLevel: 5},
    {name: "Phone", price: 1000, quantity: 40, lowStockLevel: 10},
    {name: "Tablet", price: 1250, quantity: 30, lowStockLevel: 5},
    {name: "Headphones", price: 300, quantity: 60, lowStockLevel: 15},
    {name: "Speaker", price: 200, quantity: 70, lowStockLevel: 20},
];

console.log(Inventory[0].name);

// Task 2: Create a Function to Display Product Details

function displayProductDetails(Inventory){
    return Inventory.quantity > Inventory.lowStockLevel ? "inStock" : "lowStock";
}

    console.log(`Product: ${Inventory.name}`);
    console.log(`Price: $${Inventory.price}`);
    console.log(`Quantity in stock: ${Inventory.quantity}`);
    console.log(`Stock status: ${Inventory.lowStockLevel}`);

