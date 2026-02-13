document.addEventListener("DOMContentLoaded", () => {
  // 1. Get Modal Elements
  const modal = document.getElementById("productModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalCode = document.getElementById("modalCode");
  const closeBtn = document.querySelector(".close-modal");

  // 2. Get all "View Details" buttons
  const viewButtons = document.querySelectorAll(".btn-card");

  // Only run if the modal actually exists on this page
  if (modal && viewButtons.length > 0) {
    // 3. Add click event to every "View Details" button
    viewButtons.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault(); // Stop the link from jumping to the top of the page

        // Find the parent product card of the clicked button
        const card = this.closest(".product-card");

        // Extract the data from this specific card
        const imgSrc = card.querySelector("img").src;
        const titleText = card.querySelector("h4").innerText;
        const codeText = card.querySelector(".part-code").innerText;

        // Inject the extracted data into the Modal
        modalImage.src = imgSrc;
        modalTitle.innerText = titleText;
        modalCode.innerText = codeText;

        // Show the Modal
        modal.classList.add("show");
      });
    });

    // 4. Close Modal when clicking the "X" button
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("show");
    });

    // 5. Close Modal when clicking anywhere on the dark background outside the box
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });
  }
});
