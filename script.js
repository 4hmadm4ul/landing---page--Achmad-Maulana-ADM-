setTimeout(function () {
    alert("Selamat datang di Toko Online Kami");
}, 3000);

const heroText = document.queryselector("#hero h2");
const colors = ["#FF5733","#33FF57","#3357FF"];
let colorIndex = 0;

function changeHeroTextColor() {
    heroText.style.color =colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeHeroTextcolor, 2000);

let currentI