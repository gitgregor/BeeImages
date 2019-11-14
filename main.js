const header = document.querySelector("header")
const div = document.querySelector("div")

let image = true
let title = true

const changeImage = () => {
    image = !image
    title = !title

    header.style.backgroundImage = image ? "url(balloons.jpg)" : "url(bee.png)"
    div.textContent = title ? "balony" : "Pszczoła"
}

header.addEventListener('click', changeImage)
