const entities = [
    {
        text: "Первый слайд",
        img: "image 1.jpg"
    },

    {
        text: "Второй слайд",
        img: "image 2.jpg"
    },

    {
        text: "Третий слайд",
        img: "image 3.jpg"
    }
]

const text = document.querySelector(".text");
const img = document.querySelector(".image");
const dots = document.querySelectorAll(".dot")

const setEntity = (index) => {
    text.innerText = entities[index].text;
    img.style.backgroundImage = `url(\"${entities[index].img}\")`;
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "#f1c40f";
    }
    dots[index].style.backgroundColor = "#f39c12";
}

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let currentIndex = 0;

prev.addEventListener('click', () => {
    if (currentIndex == 0) {
        currentIndex = entities.length;
    }

    setEntity(currentIndex - 1);
    currentIndex -= 1;
})
next.addEventListener('click', () => {
    if (currentIndex == entities.length - 1) {
        currentIndex = -1;
    }

    setEntity(currentIndex + 1);
    currentIndex += 1;
})

const currentSlide = (index) => {
    setEntity(index);
}