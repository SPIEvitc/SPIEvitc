const navElement = document.querySelector("nav");
const bodyElement = document.querySelector("body");
const whatElement = document.querySelector(".what");
const whySpieElement = document.querySelector(".why_spie");
const futureElement = document.querySelector(".future");
const contactFormElement = document.querySelector(".contact-form");
const logoElement = document.querySelector(".logo img");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

// darkModeToggle.addEventListener("click", () => {
//   bodyElement.classList.toggle("dark-mode");
//   bodyElement.classList.toggle("light-mode");

//   // Update the border color of the .what, .why_spie, and .future elements based on the current mode
//   if (bodyElement.classList.contains("dark-mode")) {
//     whatElement.style.borderColor = "#ddd";
//     whySpieElement.style.borderColor = "#ddd";
//     futureElement.style.borderColor = "#ddd";
//     contactFormElement.style.backgroundColor = "#444";
//     contactFormElement.style.color = "#fff";
//     navElement.style.color = "#fff"
//     logoElement.src = "logo-dark.png";
//   } else {
//     whatElement.style.borderColor = "#000";
//     whySpieElement.style.borderColor = "#000";
//     futureElement.style.borderColor = "#000";
//     contactFormElement.style.backgroundColor = "#fff";
//     contactFormElement.style.color = "#000";
//     logoElement.src = "logo-light.png";
//   }
// });

// // Check if dark mode is stored in localStorage and apply it if it is
// const storedDarkMode = localStorage.getItem("dark-mode");
// if (storedDarkMode) {
//   bodyElement.classList.add(storedDarkMode);
//   if (storedDarkMode === "dark-mode") {
//     whatElement.style.borderColor = "#ddd";
//     whySpieElement.style.borderColor = "#ddd";
//     futureElement.style.borderColor = "#ddd";
//     contactFormElement.style.backgroundColor = "#444";
//     contactFormElement.style.color = "#fff";
//     logoElement.src = "logo-dark.png";
//   } else {
//     whatElement.style.borderColor = "#000";
//     whySpieElement.style.borderColor = "#000";
//     futureElement.style.borderColor = "#000";
//     contactFormElement.style.backgroundColor = "#fff";
//     contactFormElement.style.color = "#000";
//     logoElement.src = "logo-light.png";
//   }
//   // Set the initial logo image based on the current mode
//   if (bodyElement.classList.contains("dark-mode")) {
//     logoElement.src = "logo-dark.png";
//   } else {
//     logoElement.src = "logo-light.png";
//   }
// }

darkModeToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-mode");
  bodyElement.classList.toggle("light-mode");

  // Update the border color of the .what, .why_spie, and .future elements based on the current mode
  if (bodyElement.classList.contains("dark-mode")) {
    whatElement.style.borderColor = "#ddd";
    whySpieElement.style.borderColor = "#ddd";
    futureElement.style.borderColor = "#ddd";
    contactFormElement.style.backgroundColor = "#444";
    contactFormElement.style.color = "#fff";
    navElement.style.color = "#fff"
    logoElement.src = "logo-dark.png";
    darkModeToggle.textContent = "Light";
  } else {
    whatElement.style.borderColor = "#000";
    whySpieElement.style.borderColor = "#000";
    futureElement.style.borderColor = "#000";
    contactFormElement.style.backgroundColor = "#fff";
    contactFormElement.style.color = "#000";
    logoElement.src = "logo-light.png";
    darkModeToggle.textContent = "Dark";
  }
});

// Check if dark mode is stored in localStorage and apply it if it is
// const storedDarkMode = localStorage.getItem("dark-mode");
// if (storedDarkMode) {
//   bodyElement.classList.add(storedDarkMode);
//   if (storedDarkMode === "dark-mode") {
//     whatElement.style.borderColor = "#ddd";
//     whySpieElement.style.borderColor = "#ddd";
//     futureElement.style.borderColor = "#ddd";
//     contactFormElement.style.backgroundColor = "#444";
//     contactFormElement.style.color = "#fff";
//     logoElement.src = "logo-dark.png";
//     darkModeToggle.textContent = "Light";
//   } else {
//     whatElement.style.borderColor = "#000";
//     whySpieElement.style.borderColor = "#000";
//     futureElement.style.borderColor = "#000";
//     contactFormElement.style.backgroundColor = "#fff";
//     contactFormElement.style.color = "#000";
//     logoElement.src = "logo-light.png";
//     darkModeToggle.textContent = "Dark";
//   }
//   // Set the initial logo image based on the current mode
//   if (bodyElement.classList.contains("dark-mode")) {
//     logoElement.src = "logo-dark.png";
//   } else {
//     logoElement.src = "logo-light.png";
//   }
// }

// Function to set the initial logo based on the current mode
function setInitialLogo() {
  if (bodyElement.classList.contains("dark-mode")) {
    logoElement.src = "logo-dark.png";
    darkModeToggle.textContent = "Light";
  } else {
    logoElement.src = "logo-light.png";
    darkModeToggle.textContent = "Dark";
  }
}

// Check if dark mode is stored in localStorage and apply it if it is
const storedDarkMode = localStorage.getItem("dark-mode");
if (storedDarkMode) {
  bodyElement.classList.add(storedDarkMode);
  setInitialLogo();
} else {
  setInitialLogo();
}

// Add an event listener for dark mode toggle button
darkModeToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-mode");
  bodyElement.classList.toggle("light-mode");

  // Update the border color of the elements based on the current mode
  if (bodyElement.classList.contains("dark-mode")) {
    whatElement.style.borderColor = "#ddd";
    whySpieElement.style.borderColor = "#ddd";
    futureElement.style.borderColor = "#ddd";
    contactFormElement.style.backgroundColor = "#444";
    contactFormElement.style.color = "#fff";
    navElement.style.color = "#fff";
  } else {
    whatElement.style.borderColor = "#000";
    whySpieElement.style.borderColor = "#000";
    futureElement.style.borderColor = "#000";
    contactFormElement.style.backgroundColor = "#fff";
    contactFormElement.style.color = "#000";
    navElement.style.color = "#000";
  }

  // Set the logo and toggle button text
  setInitialLogo();
});
