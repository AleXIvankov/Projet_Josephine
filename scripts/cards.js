const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener("mousemove", startRotate);
  card.addEventListener("mouseout", stopRotate);
}

function startRotate(event) {
  const cardItem = this.querySelector(".card_item");
  const halfHeight = cardItem.offsetHeight / 2;
  cardItem.style.transform =
    "rotateX(" +
    -(event.offsetY - halfHeight) / 6.5 +
    "deg) rotateY(" +
    (event.offsetX - halfHeight) / 6.5 +
    "deg)";
}

function stopRotate(event) {
  const cardItem = this.querySelector(".card_item");
  const halfHeight = cardItem.offsetHeight / 2;
  cardItem.style.transform = "rotate(0)";
}

VANTA.WAVES({
  el: "#wrapper_reglage",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x809195,
  shininess: 0.0,
  waveHeight: 30.0,
  waveSpeed: 0.5,
  zoom: 0.79,
});
