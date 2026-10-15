// Shared interactive features for the EmpowerTech Girls Foundation website.

const programAreas = [
  {
    name: "Digital Skills",
    description: "Explore computer basics, digital documents, research, and online safety."
  },
  {
    name: "Coding and Web Development",
    description: "Discover programming concepts and learn how websites are built."
  },
  {
    name: "Innovation and Problem-Solving",
    description: "Practice creative thinking, teamwork, and turning ideas into solutions."
  },
  {
    name: "Not sure yet",
    description: "That is okay. Exploring different areas can help you find what interests you."
  }
];

function updateFooter() {
  const yearElement = document.querySelector("#currentyear");
  const modifiedElement = document.querySelector("#lastModified");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  if (modifiedElement) {
    const modifiedDate = new Date(document.lastModified);
    modifiedElement.textContent = `Last modified: ${modifiedDate.toLocaleString()}`;
  }
}

function setupNavigation() {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-navigation");

  if (!menuButton || !navigation) return;

  menuButton.addEventListener("click", () => {
    const menuIsOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", `${menuIsOpen}`);
    menuButton.setAttribute(
      "aria-label",
      menuIsOpen ? `Close navigation menu` : `Open navigation menu`
    );
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", `Open navigation menu`);
    });
  });
}

function setupInterestPreference() {
  const interestSelect = document.querySelector("#interest-area");
  const preferenceStatus = document.querySelector("#interest-preference-status");

  if (!interestSelect) return;

  let savedInterest = "";
  try {
    savedInterest = localStorage.getItem("etg-interest-area") || "";
  } catch (error) {
    // The form still works when browser storage is unavailable.
  }

  if (savedInterest && programAreas.some((area) => area.name === savedInterest)) {
    interestSelect.value = savedInterest;
    showInterestDescription(savedInterest, preferenceStatus);
  }

  interestSelect.addEventListener("change", () => {
    const selectedInterest = interestSelect.value;
    const matchingArea = programAreas.find((area) => area.name === selectedInterest);

    if (matchingArea && selectedInterest) {
      try {
        localStorage.setItem("etg-interest-area", selectedInterest);
      } catch (error) {
        // Do not block the page if storage is disabled.
      }
      showInterestDescription(selectedInterest, preferenceStatus);
    } else if (preferenceStatus) {
      preferenceStatus.textContent = `Choose a learning area to see a short description.`;
    }
  });
}

function showInterestDescription(selectedInterest, statusElement) {
  if (!statusElement) return;

  const selectedArea = programAreas.find((area) => area.name === selectedInterest);
  if (selectedArea) {
    statusElement.textContent = `${selectedArea.name}: ${selectedArea.description} Your preference is saved on this device only.`;
  }
}

function setupForm(formId, messageId, message) {
  const form = document.querySelector(`#${formId}`);
  const status = document.querySelector(`#${messageId}`);

  if (!form || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    status.textContent = message;
    form.reset();
    if (formId === "interest-form") {
      const preferenceStatus = document.querySelector("#interest-preference-status");
      if (preferenceStatus) preferenceStatus.textContent = `Select a learning area to view its description. This form is not connected to an application service.`;
    }
  });
}

updateFooter();
setupNavigation();
setupInterestPreference();
setupForm(
  "interest-form",
  "interest-message",
  `Thank you for your interest. This website is a student project, so your application has not been sent to an organization.`
);

setupForm(
  "contact-form",
  "contact-message-status",
  `Thank you for your inquiry. This website is a student project, so your message has not been sent to an organization.`
);
