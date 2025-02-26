
let userName = prompt("Please enter your first name:");
if (userName === null || userName.trim() === "") {
    userName = "Guest";
}
alert("Welcome to EatNow Cafe, " + userName + "!");
