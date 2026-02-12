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

//slider client slider
let currentSlide = 0;

function updateSlider() {
  // Move track by -100% * currentSlide index
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  // We use clientData.length so it works no matter how many clients you add
  if (currentSlide < clientData.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0; // Loop back to start
  }
  updateSlider();
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = clientData.length - 1; // Loop to end
  }
  updateSlider();
}
// for the client and the testimonial

const clientData = [
  {
    id: 1,
    name: "Brooklyn Simmons",
    role: "Homeowner",
    image: "../../images/userImg.png",
    stars: 2,
    quote:
      "The team’s attention to detail and commitment to quality exceeded our expectations. They delivered on time, and their innovative solutions improved our production efficiency by 30%. Highly recommended!",
  },
  {
    id: 2,
    name: "Robert Fox",
    role: "Automobile Manager",
    image: "../../images/userImg.png",
    stars: 5,
    quote:
      "Working with this factory was a game-changer for our supply chain. The durability of the automobile parts is unmatched in the market. Truly professional service.",
  },
  {
    id: 3,
    name: "Eleanor Pena",
    role: "Industrial Designer",
    image: "../../images/userImg.png",
    stars: 4,
    quote:
      "Exceptional quality and support. The engineers understood our custom requirements perfectly and delivered a product that fits our new vehicle line seamlessly.",
  },
];

const track = document.getElementById("testimonialTrack");

const loadClientTestimonial = () => {
  track.innerHTML = "";

  let starIcons = " ";

  clientData.forEach((client) => {
    for (let i = 0; i < client.stars; i++) {
      starIcons += `<i class="fa-solid fa-star"></i>`;
    }
    const slideHtml = `
        <div class="testi-slide">
          <div class="stars">${starIcons}</div>
          <p class="quote">"${client.quote}"</p>
          <div class="user-profile">
            <img src="${client.image}" alt="${client.name}">
            <div class="user-info">
              <h4>${client.name}</h4>
              <span>${client.role}</span>
            </div>
          </div>
        </div>
      `;

    track.innerHTML += slideHtml;
    starIcons = "";
  });
};
loadClientTestimonial();

//for the Product Data SchowCase
const productData = [
  {
    id: 1,
    name: "Tata Ace",
    description: "Heavy Duty Parts",
    img: "../../images/TataAce.webp",
  },
  {
    id: 2,
    name: "Tata Magic",
    description: "Passenger Body Shells",
    img: "../../images/TataMagic.png",
  },
  {
    id: 3,
    name: "EICHER",
    description: "Truck Body Components",
    img: "../../images/Eicher.jpg",
  },
  {
    id: 4,
    name: "Ashok Leyland DOST",
    description: "Commercial Parts",
    img: "../../images/ashokleylandDost.webp",
  },
  {
    id: 5,
    name: "Mahindra Maxximo",
    description: "Supro Body Parts",
    img: "../../images/mahindra-maxximo-load.webp",
  },
  {
    id: 6,
    name: "Mahindra Alfa",
    description: "Chassis & Body Panels",
    img: "../../images/mahindraAlfa.png",
  },
  {
    id: 7,
    name: "Bajaj 3 Wheeler",
    description: "Premium Body Kits",
    img: "../../images/bajaj-3wheeler.jpg",
  },
  {
    id: 8,
    name: "Piaggio Ape",
    description: "Complete Body Parts",
    img: "../../images/piaggioApe.jpg",
  },
];
const productTrak = document.getElementById("product-main");

const loadAllProductCard = () => {
  productData.forEach((product) => {
    const productHtml = `<div class="product-card">
            <div class="product-img-box">
              <img
                src=${product.img}
                alt="Piaggio Ape Body Parts"
              />
              <div class="overlay">
                <a href="#" class="view-btn">View Details</a>
              </div>
            </div>
            <div class="product-info">
              <h3>${product.name}</h3>
              <p>${product.description}</p>
            </div>
          </div>`;
    productTrak.innerHTML += productHtml;
  });
};

loadAllProductCard();
