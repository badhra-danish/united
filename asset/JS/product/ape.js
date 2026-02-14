document.addEventListener("DOMContentLoaded", () => {
  // =========================================
  // 1. THE JSON DATA (Your Product Database)
  // =========================================
  const productData = [
    {
      id: 1,
      code: "AP-40",
      name: "Engine Frame Pass Load",
      category: "piaggio",
      img: "../../../images/product/ape/ap-01-glass-frame-pass.jpg",
      desc: "Heavy-duty Engine Frame built to withstand high vibrations and heavy industrial loads.",
    },
    {
      id: 2,
      code: "AP-39",
      name: "Trey Complete Load",
      category: "piaggio",
      img: "../../../images/product/ape/ap-39-trey-complate-load-400x284.jpg",
      desc: "Complete rear cargo tray assembly for Load vehicles.",
    },
    {
      id: 3,
      code: "AP-38",
      name: "Trey Complete New Model Load",
      category: "piaggio",
      img: "../../../images/product/ape/ap-38-trey-complate-new-model-load-400x284.jpg",
      desc: "Complete rear cargo tray designed specifically for the New Model Load version.",
    },
    {
      id: 4,
      code: "AP-37",
      name: "Trey Flooring With Channel Load",
      category: "piaggio",
      img: "../../../images/product/ape/ap-37-trey-flooring-with-channel-load-400x284.jpg",
      desc: "Heavy-duty tray flooring integrated with support channels for maximum load-bearing capability.",
    },
    {
      id: 5,
      code: "AP-36",
      name: "Trey Flooring Load",
      category: "piaggio",
      img: "../../../images/product/ape/ap-36-trey-flooring-load-400x284.jpg",
      desc: "Standard replacement tray flooring for Load models.",
    },
    {
      id: 6,
      code: "AP-35",
      name: "Trey Rear Door Old Model Load",
      category: "piaggio",
      img: "../../../images/product/ape/ap-35-trey-rear-door-old-model-load-400x222.jpg",
      desc: "Replacement rear door for Old Model Load trays.",
    },
    {
      id: 7,
      code: "AP-34",
      name: "Trey Side Door Old Model Load",
      category: "piaggio",
      img: "../../../images/product/ape/namelogo.jpg",
      desc: "Side door panel designed for Old Model Load trays.",
    },
    {
      id: 8,
      code: "AP-33",
      name: "Trey Rear Door New Model Load",
      category: "piaggio",
      img: "../../../images/product/ape/ap-33-trey-rear-door-new-model-load-400x284.png",
      desc: "Premium aftermarket Trey Rear Door for New Model Load.",
    },
    {
      id: 9,
      code: "AP-32",
      name: "Trey Side Door New Model Load",
      category: "piaggio",
      img: "../../../images/product/ape/namelogo.jpg",
      desc: "New model side door for cargo trays.",
    },
    {
      id: 10,
      code: "AP-31",
      name: "Cargo Door Lock Load",
      category: "piaggio",
      img: "../../../images/product/ape/ap-31-cargo-door-lock-load.jpg",
      desc: "Secure and durable cargo door locking mechanism.",
    },
    {
      id: 11,
      code: "AP-30",
      name: "Top Load",
      category: "piaggio",
      img: "../../../images/product/ape/ap-30-top-load.jpg",
      desc: "Cabin top / roof panel designed for Load models.",
    },
    {
      id: 12,
      code: "AP-29",
      name: "Steering Column Neck Pass Load",
      category: "piaggio",
      img: "../../../images/product/ape/ap-29-steering-column-neck-pass-load.jpg",
      desc: "Precision-machined steering column neck for both Passenger and Load models.",
    },
    {
      id: 13,
      code: "AP-28",
      name: "Rear Side Corner Pass",
      category: "piaggio",
      img: "../../../images/product/ape/ap-28-rear-side-corner-pass.jpg",
      desc: "Rear side corner replacement panel for Passenger models.",
    },
    {
      id: 14,
      code: "AP-27",
      name: "Rear Mudguard Pass Load",
      category: "piaggio",
      img: "../../../images/product/ape/ap-27-rear-guard-pass-load.jpg",
      desc: "Durable rear mudguard designed to protect the vehicle chassis from road debris.",
    },
    {
      id: 15,
      code: "AP-26",
      name: "Side Mudguard City Model Pass",
      category: "piaggio",
      img: "../../../images/product/ape/ap-26-side-mudguard-city-model-pass.jpg",
      desc: "Side mudguard tailored specifically for the City Model Passenger vehicle.",
    },
    {
      id: 16,
      code: "AP-25",
      name: "Desk Board Pass Load",
      category: "piaggio",
      img: "../../../images/product/ape/ap-25-desk-board-pass-load.jpg",
      desc: "Front desk board / dashboard structural panel.",
    },
    {
      id: 17,
      code: "AP-24",
      name: "Hood Pipe Umbrella Pass",
      category: "piaggio",
      img: "../../../images/product/ape/ap-24-hood-pipe-umbrella-pass.jpg",
      desc: "Structural pipe framework for supporting the soft-top hood/umbrella.",
    },
    {
      id: 18,
      code: "AP-23 A",
      name: "Rear Body New Model Pass",
      category: "piaggio",
      img: "../../../images/product/ape/ap-23-a-rear-body-new-model-pass.jpg",
      desc: "Complete rear body structure for the New Model Passenger vehicle.",
    },
    {
      id: 19,
      code: "AP-23",
      name: "Rear Body Old Model Pass",
      category: "piaggio",
      img: "../../../images/product/ape/ap-23-rear-body-old-model-pass.jpg",
      desc: "Classic replacement rear body structure for Old Model Passenger vehicles.",
    },
    {
      id: 20,
      code: "AP-22",
      name: "Center Piller Pass",
      category: "piaggio",
      img: "../../../images/product/ape/ap-22-center-piller-pass.jpg",
      desc: "Vital structural center pillar component for Passenger models.",
    },
    {
      id: 21,
      code: "AP-21",
      name: "Corner No 5 Pass",
      category: "piaggio",
      img: "../../../images/product/ape/ap-21-corner-no-5-pass.jpg",
      desc: "Specific body corner panel (No. 5) for Passenger vehicles.",
    },
    {
      id: 22,
      code: "AP-20",
      name: "Engine Door Pass Load",
      category: "piaggio",
      img: "../../../images/product/ape/ap-20-engine-door-pass-load.jpg",
      desc: "Engine access door panel.",
    },
    {
      id: 23,
      code: "AP-19",
      name: "Center Flooring Pass",
      category: "piaggio",
      img: "../../../images/product/ape/ap-19-center-flooring-pass.jpg",
      desc: "Center flooring pan replacement for Passenger models.",
    },
    {
      id: 24,
      code: "AP-18",
      name: "Food Step Box Pass",
      category: "piaggio",
      img: "../../../images/product/ape/ap-18-foot-step-box-pass.jpg",
      desc: "Passenger footstep box assembly.",
    },
    {
      id: 25,
      code: "AP-17",
      name: "Dicky Flooring Pass",
      category: "piaggio",
      img: "../../../images/product/ape/ap-17-dicky-flooring-pass.jpg",
      desc: "Rear luggage/dicky compartment flooring pan.",
    },
    {
      id: 26,
      code: "AP-16",
      name: "Rear Door New Model Pass",
      category: "piaggio",
      img: "../../../images/product/ape/ap-16-rear-door-new-model-pass.jpg",
      desc: "Rear access door specifically designed for the New Model Passenger vehicle.",
    },
    {
      id: 27,
      code: "AP-15",
      name: "Rear Door Old Model Pass",
      category: "piaggio",
      img: "../../../images/product/ape/ap-15-rear-door-old-model-pass.jpg",
      desc: "Rear access door designed as an exact replacement for the Old Model Passenger vehicle.",
    },
    {
      id: 28,
      code: "AP-14",
      name: "Partition New Model Pass",
      category: "piaggio",
      img: "../../../images/product/ape/ap-14-partition-new-model-pass.jpg",
      desc: "Cabin partition wall for New Model Passenger vehicles.",
    },
    {
      id: 29,
      code: "AP-13",
      name: "Partition Old Model Pass",
      category: "piaggio",
      img: "../../../images/product/ape/ap-13-partition-old-model-pass-400x284.png",
      desc: "High-quality cabin partition replacement for Old Model Pass.",
    },
    {
      id: 30,
      code: "AP-12",
      name: "Side Panel New Model Pass",
      category: "piaggio",
      img: "../../../images/product/ape/ap-12-side-panel-new-model-pass-400x284.png",
      desc: "Precision-engineered Side Panel for New Model Pass.",
    },
    {
      id: 31,
      code: "AP-11",
      name: "Side Panel Old Model Pass",
      category: "piaggio",
      img: "../../../images/product/ape/ap-11-side-panel-old-model-pass.jpg",
      desc: "Replacement side body panel for Old Model Passenger vehicles.",
    },
    {
      id: 32,
      code: "AP-10",
      name: "Cabin Door Load",
      category: "piaggio",
      img: "../../../images/product/ape/ap-10-cabin-door-load.jpg",
      desc: "Driver cabin door assembly for Load models.",
    },
    {
      id: 33,
      code: "AP-09",
      name: "Dera Box Pass Load",
      category: "piaggio",
      img: "../../../images/product/ape/ap-09-dera-box-pass-load.jpg",
      desc: "Dera box structural assembly for Passenger and Load variations.",
    },
    {
      id: 34,
      code: "AP-08",
      name: "Head Light Bracket Pass Load",
      category: "piaggio",
      img: "../../../images/product/ape/ap-08-head-light-bracket-pass-load.jpg",
      desc: "Front headlight mounting bracket.",
    },
    {
      id: 35,
      code: "AP-07",
      name: "Dera Pass Load",
      category: "piaggio",
      img: "../../../images/product/ape/ap-07-dera-pass-load.jpg",
      desc: "Primary Dera structural component compatible with Passenger and Load.",
    },
    {
      id: 36,
      code: "AP-06",
      name: "Flooring Rear Corner Pass",
      category: "piaggio",
      img: "../../../images/product/ape/ap-06-flooring-rear-corner-pass.jpg",
      desc: "Rear corner flooring repair section for Passenger models.",
    },
    {
      id: 37,
      code: "AP-05",
      name: "Corner No 1 Samosa Pass Load",
      category: "piaggio",
      img: "../../../images/product/ape/ap-05-corner-no-1-samosa.jpg",
      desc: "Front 'Samosa' corner panel (No. 1).",
    },
    {
      id: 38,
      code: "AP-04",
      name: "Front Flooring Pass Load",
      category: "piaggio",
      img: "../../../images/product/ape/ap-04-front-flooring-pass-load.jpg",
      desc: "Front cabin flooring replacement pan.",
    },
    {
      id: 39,
      code: "AP-03",
      name: "Glass Frame City Model",
      category: "piaggio",
      img: "../../../images/product/ape/ap-03-glass-frame-city-model.jpg",
      desc: "Windshield glass mounting frame tailored for the City Model.",
    },
    {
      id: 40,
      code: "AP-02",
      name: "Glass Frame Load",
      category: "piaggio",
      img: "../../../images/product/ape/ap-02-glass-frame-load.jpg",
      desc: "Front windshield glass frame designed specifically for Load models.",
    },
    {
      id: 41,
      code: "AP-01",
      name: "Glass Frame Pass",
      category: "piaggio",
      img: "../../../images/product/ape/ap-01-glass-frame-pass.jpg",
      desc: "Front windshield glass frame replacement for Passenger models.",
    },
  ];
  // =========================================
  // 2. DOM Elements
  // =========================================
  const productGrid = document.getElementById("productGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const categoryTitle = document.getElementById("current-category-title");
  const categoryImg = document.getElementById("current-category-img"); // NEW LINE
  // Modal Elements
  const modal = document.getElementById("productModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalCode = document.getElementById("modalCode");
  const modalDesc = document.querySelector(".modal-desc"); // Make sure your modal HTML has this class!
  const closeBtn = document.querySelector(".close-modal");

  // Stop if we aren't on the catalog page
  if (!productGrid) return;

  // =========================================
  // 3. THE RENDER FUNCTION
  // =========================================
  // This function takes a list of products and turns them into HTML
  const renderProducts = (productsToDisplay) => {
    let generatedHTML = "";

    productsToDisplay.forEach((product) => {
      // Notice we added data-id="${product.id}" to the button!
      generatedHTML += `
        <div class="product-card" data-category="${product.category}" style="animation: fadeInUp 0.4s ease forwards;">
          <div class="card-img-box">
            <img src="${product.img}" alt="${product.name}" />
            <div class="card-overlay">
              <a href="#" class="btn-card" data-id="${product.id}">
                <span class="btn-text">View Details</span>
                <span class="btn-icon"><i class="fa-solid fa-arrow-up-right"></i></span>
              </a>
            </div>
          </div>
          <div class="card-info">
            <span class="part-code">${product.code}</span>
            <h4>${product.name}</h4>
          </div>
        </div>
      `;
    });

    productGrid.innerHTML = generatedHTML;
  };

  // Initial Load: Show all products when the page opens
  renderProducts(productData);

  // =========================================
  // 4. THE FILTER LOGIC
  // =========================================
  if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Update UI (Colors and Title)
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        // 2. Update Image
        if (categoryImg) {
          const newImgSrc = btn.getAttribute("data_img");
          categoryImg.src = newImgSrc;
          categoryImg.alt = btn.innerText;
        }
        if (categoryTitle) categoryTitle.innerHTML = btn.innerText;

        // Get the category to filter by
        const filterValue = btn.getAttribute("data-filter");

        // Filter the JSON array
        if (filterValue === "all") {
          renderProducts(productData); // Show everything
        } else {
          // Create a new array with only the matching categories
          const filteredData = productData.filter(
            (product) => product.category === filterValue,
          );
          renderProducts(filteredData); // Render only the filtered ones
        }
      });
    });
  }

  // =========================================
  // 5. THE MODAL LOGIC (Event Delegation)
  // =========================================
  /* Because our buttons are created dynamically by JavaScript, 
     we attach the click listener to the whole grid container. */

  productGrid.addEventListener("click", (e) => {
    // Check if what we clicked was inside a .btn-card
    const clickedBtn = e.target.closest(".btn-card");

    if (clickedBtn) {
      e.preventDefault();

      // Get the ID we attached to the button HTML earlier
      const productId = parseInt(clickedBtn.getAttribute("data-id"));

      // Find the exact product in our JSON database using that ID
      const selectedProduct = productData.find(
        (product) => product.id === productId,
      );

      if (selectedProduct && modal) {
        // Inject the specific JSON data into the Modal HTML
        modalImage.src = selectedProduct.img;
        modalTitle.innerText = selectedProduct.name;
        modalCode.innerText = selectedProduct.code;

        // Inject the description if the modal has a description paragraph
        if (modalDesc) {
          modalDesc.innerText = selectedProduct.desc;
        }

        // Show the Modal
        modal.classList.add("show");
      }
    }
  });

  // Close Modal Events
  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.classList.remove("show"));
    window.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("show");
    });
  }
});
