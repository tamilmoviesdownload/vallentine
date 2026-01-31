const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

const moveButton = () => {
  // Calculate max possible coordinates (keeping button inside viewport)
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  // Set position to fixed/absolute relative to the whole screen
  noBtn.style.position = "fixed"; 
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
};

// Run away on hover (Desktop)
noBtn.addEventListener("mouseover", moveButton);

// Run away on touch (Mobile)
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Prevents accidental clicking
    moveButton();
});

// Yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "block";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "flex";
    gifResult.play();
  }, 3000);
});
