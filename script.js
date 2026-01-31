const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Function to handle the "No" button running away
const moveButton = () => {
  // Calculate max coordinates ensuring the button stays inside the visible screen
  // window.innerWidth/Height gets the full mobile screen size
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  // We use fixed positioning to move it relative to the viewport/screen
  noBtn.style.position = "fixed";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
};

// desktop: runs away on hover
noBtn.addEventListener("mouseover", moveButton);

// mobile: runs away on touch
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // Prevents the browser from clicking the button if the finger is too fast
  moveButton();
});

// yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});
