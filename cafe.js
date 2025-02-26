let userName = prompt("Please enter your first name:");

if (userName === null || userName.trim() === "") {
    userName = "Guest";
}

alert("Welcome to EatNow Cafe, " + userName + "!");

let menuItems = [
    "Chicken Biryani",
    "Vegetable Curry",
    "Grilled Fish",
    "Spaghetti Bolognese",
    "Mango Lassi"
];

console.log("EatNow Cafe Menu:");
menuItems.forEach(function(item, index) {
    console.log((index + 1) + ". " + item);
});

let newDish = prompt("Suggest a new dish:");

if (newDish !== null && newDish.trim() !== "") {
    menuItems.push(newDish);
    console.log("New dish added: " + newDish);

    console.log("Updated EatNow Cafe Menu:");
    menuItems.forEach(function(item, index) {
        console.log((index + 1) + ". " + item);
    });
} else {
    console.log("No new dish added.");
}
