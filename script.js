const inputField = document.getElementById("strsInput");
const submitButton = document.getElementById("submit");
const outputDiv = document.getElementById("output");

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

const handleInputAndDisplayOutput = () => {
  const inputValue = inputField.value;
  const strs = JSON.parse(inputValue);
  const result = groupAnagrams(strs);
  outputDiv.textContent = JSON.stringify(result);
};

submitButton.addEventListener("click", handleInputAndDisplayOutput);

// Add event listener to the input field to listen for the Enter key press event
inputField.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    handleInputAndDisplayOutput();
  }
});
