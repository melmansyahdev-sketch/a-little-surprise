// ======================================
// ELEMENT
// ======================================

const gallery = document.getElementById("gallery");
const galleryImage = document.getElementById("galleryImage");
const galleryTitle = document.getElementById("galleryTitle");

const giftAnimation = document.getElementById("giftAnimation");
const giftBox = document.querySelector(".gift-box");

const btn = document.getElementById("openBtn");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");

const welcome = document.getElementById("welcome");
const message = document.getElementById("message");
const letter = document.getElementById("letter");
const closing = document.getElementById("closing");

const typing = document.getElementById("typing");
const bgMusic = document.getElementById("bgMusic");

// ======================================
// TEXT
// ======================================

const text =
    "Semoga Allah selalu menjaga setiap langkahmu. Semoga semua doa baikmu dikabulkan. Semoga skripsinya dimudahkan, diberi kesehatan, kebahagiaan, dan keberkahan di setiap perjalanan hidupmu.";

const galleryData = [
    {
        image: "sunset.jpg",
        title: "Every journey begins with a small step."
    },
    {
        image: "beach.jpg",
        title: "May every wave bring peace and every sunrise bring new hope."
    },
    {
        image: "night.jpg",
        title: "Some people inspire us without ever knowing it."
    },
    {
        image: "flower.jpg",
        title: "Keep blooming wherever Allah places you."
    },
    {
        image: "coffee.jpg",
        title: "Good things take time. Just like dreams. Just like prayers."
    }
];

let i = 0;
let currentSlide = 0;

// ======================================
// OPEN GIFT
// ======================================

btn.addEventListener("click", () => {
    if (bgMusic) {
        bgMusic.volume = 0.4;
        bgMusic.play().catch(() => {});
    }

    welcome.classList.add("hidden");
    giftAnimation.classList.remove("hidden");

    setTimeout(() => {
        giftBox.classList.add("gift-open");
    }, 700);

    setTimeout(() => {
        confetti({
            particleCount: 220,
            spread: 180,
            origin: { y: 0.6 }
        });
    }, 1500);

    setTimeout(() => {
        giftAnimation.classList.add("hidden");

        message.classList.remove("hidden");
        message.classList.add("show");

        typing.innerHTML = "";
        i = 0;
        nextBtn.style.display = "none";

        typeText();
    }, 2200);
});

// ======================================
// TYPING EFFECT
// ======================================

function typeText() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, 30);
    } else {
        nextBtn.style.display = "inline-block";
    }
}

// ======================================
// CONTINUE
// ======================================

nextBtn.addEventListener("click", () => {
    message.classList.add("hidden");

    letter.classList.remove("hidden");
    letter.classList.add("show");
});

// ======================================
// FINISH
// ======================================

finishBtn.addEventListener("click", () => {
    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.5 }
    });

    letter.classList.add("hidden");
    startGallery();
});

// ======================================
// GALLERY
// ======================================

function startGallery() {
    currentSlide = 0;

    gallery.classList.remove("hidden");
    gallery.classList.add("show");

    showSlide();
}

function showSlide() {
    galleryImage.src = galleryData[currentSlide].image;
    galleryTitle.innerHTML = galleryData[currentSlide].title;

    currentSlide++;

    if (currentSlide < galleryData.length) {
        setTimeout(showSlide, 5000);
    } else {
        setTimeout(() => {
            gallery.classList.add("hidden");

            closing.classList.remove("hidden");
            closing.classList.add("show");
        }, 5000);
    }
}