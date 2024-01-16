const headingOne = document.querySelector("h1");
const button = document.querySelector("button");

const alertMe = () => {
  alert(`This is the ${headingOne.textContent} page`);
};

button.addEventListener("click", alertMe);
