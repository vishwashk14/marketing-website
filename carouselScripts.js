const images = [
  "/assets/img/mobie_slider.png",
  "/assets/img/mobie_slider 2.png",
  "/assets/img/mobie_slider.png",
  "/assets/img/mobie_slider 2.png",
  "/assets/img/mobie_slider.png",
  "/assets/img/mobie_slider 2.png",
];

const contentDescriptions = [
  "Radio FM",
  "Another description",
  "Yet another description",
  "And so on...",
  "Description 5",
  "Last description"
];

let currentImageIndex = 0;
const displayedImg = document.getElementById("displayedImg");
const currentSlideSpan = document.getElementById("currentSlide");
const totalSlidesSpan = document.getElementById("totalSlides");
const imageDescription = document.getElementById("imageDescription");
const downloadCount = document.getElementById("downloadCount");

totalSlidesSpan.textContent = images.length.toString().padStart(2, '0');

document.getElementById("left_btn").addEventListener("click", function () {
  if (currentImageIndex > 0) {
      currentImageIndex--;
  } else {
      currentImageIndex = images.length - 1;
  }

  updateDisplayedContent();
});

document.getElementById("right_btn").addEventListener("click", function () {
  if (currentImageIndex < images.length - 1) {
      currentImageIndex++;
  } else {
      currentImageIndex = 0;
  }

  updateDisplayedContent();
});

function updateDisplayedContent() {
  displayedImg.classList.add("slide-out");

  setTimeout(() => {
      displayedImg.src = images[currentImageIndex];
      imageDescription.textContent = contentDescriptions[currentImageIndex];
      displayedImg.classList.remove("slide-out");
  }, 300);

  const formattedCurrentSlide = (currentImageIndex + 1).toString().padStart(2, "0");
  currentSlideSpan.textContent = formattedCurrentSlide;
}

// Initial content display
updateDisplayedContent();
