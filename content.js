const MOVE_AMT = 128


// Select every element in the DOM
const allElements = document.querySelectorAll('*');
console.log(allElements)
// Iterate through each element
allElements.forEach(element => {
  // Check the computed CSS position
  if (window.getComputedStyle(element).position === 'fixed') {
    // Override the position to absolute
    element.style.setProperty('position', 'absolute', 'important');
  }
});



// Create a wrapper div
const wrapper = document.createElement('div');
 //wrapper.style.marginTop = `${moveAmount}px`;
wrapper.style.position = "relative"
// Move all existing body children into the wrapper
while (document.body.firstChild) {
    wrapper.appendChild(document.body.firstChild);
}

// Append the wrapper to the body
document.body.appendChild(wrapper);


console.log("hello there world");
const HEADER = document.createElement("header")
HEADER.id = "InBrowserTerminal";
HEADER.style.backgroundColor = "blue"
HEADER.style.width = "100%"
HEADER.style.height = MOVE_AMT.toString() + "px"



document.body.prepend(HEADER)





