const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();
const createMemoryCard = memoryCard()
const $memoryCard = createMemoryCard({
  src: "./images/icon-collabcode.svg",
  alt: "Gueio Mascote da CollabCode"
});
const $memoryCardfront = createMemoryCard({
  src: "./images/icon-js.png",
  alt: "Icone livro JavaScript",
  nameClass: "-front"
});
const $memoryCardJava = createMemoryCard({
  src: "./images/icon-java.png",
  alt: "Icone livro Java",
  nameClass: "-front"
})
const $memoryCardC = createMemoryCard({
  src: "./images/icon-c.png",
  alt: "Icone livro C++",
  nameClass: "-front"
});




$root.insertAdjacentElement("beforeend", $cardsWrapper);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardfront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardfront);

