// h-box 
hBox = document.getElementById('h-box');
var hShow = function() {
    var y = window.scrollY;
    if (y >= 2750) {
        hBox.className = 'h-box h-show'
    } else {
        hBox.className = 'h-box h-hide'
    }
};
window.addEventListener("scroll", hShow);


// slide box section
const images = document.querySelectorAll(".static");

const skills = document.querySelectorAll(".h-skills");

let windowHeight = window.innerHeight

function animateImages() {
    images.forEach((image) => {
        let bounding = image.getBoundingClientRect();
        if (bounding.bottom > windowHeight) {
            image.classList.add("hide");
        } else if (bounding.top < 50) {
            image.classList.add("hide");
        } else {
            image.classList.remove("hide");
            image.classList.remove("show");
        }
    });
}

function animateSkills() {
    skills.forEach((image) => {
        let bounding = image.getBoundingClientRect();
        if (bounding.bottom > 500) {
            image.classList.add("h-hide");
        } else if (bounding.top < 500) {
            image.classList.add("h-hide");
        } else {
            image.classList.remove("h-hide");
            image.classList.remove("h-show");
        }   
    });
}

document.addEventListener("scroll", function () {
    animateImages();
    document.removeEventListener("scroll", this);
});

window.addEventListener("resize", function () {
    windowHeight = window.windowHeight;
    window.removeEventListener("resize", this);
});

animateImages();