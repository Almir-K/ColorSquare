const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

// You can choose to remove this function if you don't plan to use it immediately
function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px black";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
function addCustomColor() {
  const customColorInput = document.getElementById("customColor");
  const customColor = customColorInput.value;

  if (customColor) {
    // Add the custom color to the colors array
    colors.push(customColor);

    // Update the button color
    const addButton = document.querySelector(".color-pick button");
    addButton.style.backgroundColor = customColor;
  }
}
