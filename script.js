const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Function to move the button within safe screen boundaries
const moveButton = () => {
  // 1. Get the size of the button
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  // 2. Calculate max available space (Screen size minus button size)
  // We add a 20px padding so it doesn't touch the very edge
  const maxX = window.innerWidth - btnWidth - 20;
  const maxY = window.innerHeight - btnHeight - 20;

  // 3. Generate random coordinates within the safe zone
  const newX = Math.max(10, Math.floor(Math.random() * maxX));
  const newY = Math.max(10, Math.floor(Math.random() * maxY));

  // 4. Apply the new position
  noBtn.style.position = "fixed"; 
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
};

// Desktop support
noBtn.addEventListener("mouseover", moveButton);

// Mobile support: moves the button the moment it is touched
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // Prevents the phone from actually clicking it
  moveButton();
});

// Yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});
