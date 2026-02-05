const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "If you are working on something exciting, it will keep you motivated.",
  "Success is not in what you have, but who you are.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The way to get started is to stop talking and begin doing.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes later becomes never. Do it now.",
  "Great things take time.",
  "Stay positive, work hard, make it happen."
];

console.log(quotes);


const colors = [
  "#FF5733", // Red-Orange
  "#33FF57", // Green
  "#3357FF", // Blue
  "#F1C40F", // Yellow
  "#8E44AD", // Purple
  "#E67E22", // Orange
  "#2ECC71", // Emerald
  "#3498DB", // Sky Blue
  "#E74C3C", // Crimson
  "#1ABC9C", // Teal
  "#9B59B6", // Violet
  "#34495E", // Dark Blue-Grey
  "#D35400", // Burnt Orange
  "#27AE60", // Forest Green
  "#2980B9", // Deep Blue
  "#C0392B", // Dark Red
  "#16A085", // Dark Teal
  "#BDC3C7", // Silver
  "#7F8C8D", // Grey
  "#FFFFFF"  // White
];

console.log(colors);

function change(){
  const backgroundColor = document.getElementById("h");
  const itrate = Math.floor(Math.random() * colors.length);
  backgroundColor.style.backgroundColor = colors[itrate];
}
setInterval(change, 1000);




function generate(){



const text = document.getElementById("quote");
const index = Math.floor(Math.random()*quotes.length);

text.textContent = quotes[index];
}

setInterval(generate,3000)