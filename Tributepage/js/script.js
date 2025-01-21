
const header = document.querySelector("header")
header.style.opacity = "0"
header.style.transform = "translateY(-20px)"

window.addEventListener("load", () => {
  setTimeout(() => {
    header.style.transition = "opacity 1s, transform 1s"
    header.style.opacity = "1"
    header.style.transform = "translateY(0)"
  }, 100)
})

