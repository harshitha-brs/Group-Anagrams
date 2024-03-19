// Get references to the input, button, and output elements
const inputField = document.getElementById("strsInput");
const submitButton = document.getElementById("submit");
const outputDiv = document.getElementById("output");

// Define the groupAnagrams function
const groupAnagrams = strs => {
  let myMap = new Map();

  strs.forEach(ele => {
    let eleSorted = ele
      .split("")
      .sort()
      .join("");
    if (myMap.has(eleSorted)) {
      myMap.set(eleSorted, [ele, ...myMap.get(eleSorted)]);
    } else {
      myMap.set(eleSorted, [ele]);
    }
  });

  return Array.from(myMap.values());
};

// Define a function to handle input and display output
const handleInputAndDisplayOutput = () => {
  // Get input value
  const inputValue = inputField.value;
  // Parse input value as an array of strings
  const strs = JSON.parse(inputValue);
  // Call groupAnagrams function with the input
  const result = groupAnagrams(strs);
  // Display the result in the output field
  outputDiv.textContent = JSON.stringify(result);
};

// Add event listener to the submit button
submitButton.addEventListener("click", handleInputAndDisplayOutput);
