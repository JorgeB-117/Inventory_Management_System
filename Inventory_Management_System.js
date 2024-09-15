// Task 1: Create an Inventory Array of Product Objects

const Inventory = [
    {name: "Laptop", price: 1500, quantity: 20, lowStockLevel: 5},
    {name: "Phone", price: 1000, quantity: 40, lowStockLevel: 10},
    {name: "Tablet", price: 1250, quantity: 10, lowStockLevel: 15},
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

function updateStock(products, unitsSold){
    products.quantity -= unitsSold;
if (products.quantity <= 0) {
    console.log(`${products.name} is now out of stock`); 
}
else if (products.lowStockLevel >= products.quantity){
    console.log(`${products.name} is now low stock`);
}
};

//Test function works correctly as it is now low in stock.
updateStock(Inventory[0],17);


// Task 4: Create a Function to Check Low Stock Products

function checkLowStock(Inventory){
    Inventory.forEach(Inventory => {
        if (Inventory.quantity <= Inventory.lowStockLevel) 
            return console.log(`Products which are now low in stock:${Inventory.name}`);
}
)};

//Test works, give back laptop and tablet.
checkLowStock(Inventory);


// Task 5: Create a Function to Calculate Total Inventory Value

function calculateInventoryValue(){
    return Inventory.reduce((total, Inventory) => {
        return total + (Inventory.quantity * Inventory.price)},0); 
};

//Output gives out "Total Inventory Value is: $89000"
let totalInventoryValue = calculateInventoryValue(Inventory)
console.log(`Total Inventory Value is: $${totalInventoryValue}`)

