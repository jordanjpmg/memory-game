const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();
const createMemoryCard = memoryCard()
const $memoryCard = createMemoryCard({
  src: "./images/icon-woman.png",
  alt: "Mulher codando",
});
const $memoryCardfront = createMemoryCard({
  src: "./images/icon-js.png",
  alt: "Icone livro JavaScript",
});
const $memoryCardJava = createMemoryCard({
  src: "./images/icon-java.png",
  alt: "Icone livro Java",
})
const $memoryCardC = createMemoryCard({
  src: "./images/icon-c.png",
  alt: "Icone livro C++",
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

