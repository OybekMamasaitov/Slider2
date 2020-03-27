const entities = [
    {
        text: "Первый слайд",
        img: "images/image 1.jpg"
    },

    {
        text: "Второй слайд",
        img: "images/image 2.jpg"
    },

    {
        text: "Третий слайд",
        img: "images/image 3.jpg"
    },

    {
        text: "Четвертый слайд",
        img: "images/image 4.jpg"
    },

    {
        text: "Пятый слайд",
        img: "images/image 5.jpg"
    },

    {
        text: "Шестой слайд",
        img: "images/image 6.jpg"
    },

    {
        text: "Седьмой слайд",
        img: "images/image 7.jpg"
    }
]

const text = document.querySelector(".text");
const img = document.querySelector(".image");
const dotsContainer = document.querySelector(".dots_container");

for (let i = 0; i < entities.length; i++) {
    let dot = document.createElement("div");
    dot.className = "dot";
    if (i === 0) {
        dot.classList.add("first_dot");
    }
    dotsContainer.append(dot);
}

const dots = document.querySelectorAll(".dot");

dots.forEach((dot, index) => dot.addEventListener('click', () => { currentSlide(index); }))

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