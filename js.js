// JavaScript to handle navbar background change on scroll
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar-scroll');
    if (window.scrollY > 50) {  // Misalnya, setelah 50px scroll
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Inisialisasi Swiper untuk slider gambar utama
const mainSwiper = new Swiper('.swiper', {
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  // Anda bisa menambahkan pengaturan lain di sini jika diperlukan
});

// Inisialisasi Swiper untuk testimonial

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1, // Menampilkan 1 slide per tampilan di mobile
  spaceBetween: 10, // Jarak antar slide di mobile

  // Responsive breakpoints
  breakpoints: {
    768: {
      slidesPerView: 2, // Menampilkan 2 slide per tampilan di tablet
      spaceBetween: 20, // Jarak antar slide di tablet
    },
    1024: {
      slidesPerView: 4, // Menampilkan 4 slide per tampilan di desktop
      spaceBetween: 30, // Jarak antar slide di desktop
    }
  },

  // Pagination with bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Makes the bullets clickable
  },

  // Optional: Enable auto height for responsive slides
  autoHeight: true,

  // Disable partial swiping, move one full item at a time
  slidesPerGroup: 1, // Memindahkan hanya satu slide per klik navigasi atau klik poin
});

// Functionality for custom navigation buttons
document.getElementById('prevButton').addEventListener('click', function() {
  swiper.slidePrev(); // Move to the previous slide
});

document.getElementById('nextButton').addEventListener('click', function() {
  swiper.slideNext(); // Move to the next slide
});





function changeImage(newSrc) {
    document.getElementById("mainImage").src = newSrc;
    document.getElementById("mainImage2").src = newSrc;
    document.getElementById("mainImage3").src = newSrc;
    document.getElementById("mainImage4").src = newSrc;
    document.getElementById("mainImage5").src = newSrc;
    document.getElementById("mainImage6").src = newSrc;
    document.getElementById("mainImage7").src = newSrc;
    document.getElementById("mainImage8").src = newSrc;
    document.getElementById("mainImage9").src = newSrc;
    document.getElementById("mainImage10").src = newSrc;
    document.getElementById("mainImage11").src = newSrc;
    document.getElementById("mainImage12").src = newSrc;
    document.getElementById("mainImage13").src = newSrc;
    document.getElementById("mainImage14").src = newSrc;
    document.getElementById("mainImage15").src = newSrc;
    document.getElementById("mainImage16").src = newSrc;
  
  }
 
    document.addEventListener('DOMContentLoaded', function() {
        const cards = document.querySelectorAll('.product-card');
        let currentActive = 0;

        function setActiveCard(index) {
            cards.forEach((card, i) => {
                if (i === index) {
                    card.classList.add('active');
                } else {
                    card.classList.remove('active');
                }
            });
        }

        // Set the center card as active initially
        setActiveCard(currentActive);

        // Optionally, if you want to make it a carousel-like effect (e.g., rotating the active card):
        setInterval(() => {
            currentActive = (currentActive + 1) % cards.length;
            setActiveCard(currentActive);
        }, 3000); // Change active card every 3 seconds
    });
  
