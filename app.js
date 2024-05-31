document.querySelector(".hamburger").addEventListener("click", function () {
  this.classList.toggle("is-active");

  const aside = document.querySelector("aside");
  const body = document.body;

  if (aside.style.left === "0px") {
    aside.style.left = "-250px"; // Adjust this value based on the width of your aside element
    body.style.overflow = "auto"; // Enable scrolling
  } else {
    aside.style.left = "0";
    body.style.overflow = "hidden"; // Disable scrolling
  }
});
