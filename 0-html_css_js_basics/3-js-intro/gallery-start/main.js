const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* implement displayImage */

/* Declaring the array of image filenames */

const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Looping through images */

for (let image of images) {
  const imagePath = `./images/${image}`;
  const newImage = document.createElement("img");
  newImage.setAttribute("src", imagePath);
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", () =>
    displayedImage.setAttribute("src", imagePath)
  );
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", () => {
  if (btn.getAttribute("class") === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
