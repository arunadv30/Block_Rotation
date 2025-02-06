// Arrays to hold the contents (texts) and colors
const contents = ["Blue", "Yellow", "Red", "Green"];
const colors = ["blue", "yellow", "red", "green"];

console.log(contents);
console.log(colors);

// Function to rotate the contents and colors clockwise
function rotateBoxes() {
  // Rotate the content array (shift right and move last item to first)
  const newContents = [
    contents[contents.length - 1],
    ...contents.slice(0, contents.length - 1),
  ];
  const newColors = [
    colors[colors.length - 1],
    ...colors.slice(0, colors.length - 1),
  ];

  console.log(newContents);
  console.log(newColors);

  // Update the arrays with the rotated values
  for (let i = 0; i < contents.length; i++) {
    contents[i] = newContents[i];
    colors[i] = newColors[i];
  }

  // Now update the HTML elements to reflect the changes
  const boxes = document.querySelectorAll(".child-box");
  boxes.forEach((box, index) => {
    box.textContent = contents[index]; // Update text
    box.classList.remove(...colors); // Remove old color class
    box.classList.add(colors[index]); // Add new color class
  });
}

// Attach the rotateBoxes function to the button click event
document.querySelector(".btn").addEventListener("click", rotateBoxes);
