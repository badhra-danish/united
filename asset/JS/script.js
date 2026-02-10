// Select the header
const header = document.querySelector(".header-main");

// Listen for scroll events
window.addEventListener("scroll", () => {
  // Calculate 5% of the current viewport height
  const scrollTrigger = window.innerHeight * 0.05;

  // Check if user scrolled past the trigger point
  if (window.scrollY > scrollTrigger) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});
function toggleMobileDropdown() {
  // Only works on mobile screens
  if (window.innerWidth <= 768) {
    const list = document.querySelector(".product-list");
    const parent = document.querySelector(".product-nav");

    // Toggle Classes
    list.classList.toggle("open");
    parent.classList.toggle("active");
  }
}
