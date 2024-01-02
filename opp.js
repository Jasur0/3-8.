const title = document.querySelector('.title')
const son = prompt("son kiriting")
const foiz = son % 2
if (foiz == 0) {
    title.textContent = "Sizning soningiz juft"
} else {
    title.textContent = "Sizning soningiz toq"
}
