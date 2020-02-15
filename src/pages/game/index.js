const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard("./images/icon-collabcode.svg", "Gueio Mascote da CollabCode");
const $memoryCardfront = createMemoryCard("./images/icon-js.png", "Icone livro JavaScript", "-front");
const $cardGueio = createMemoryCard("./images/icon-collabcode.svg", "Gueio Mascote da CollabCode", "-front");



$root.insertAdjacentElement("beforeend", $cardsWrapper);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardGueio);
$cardsWrapper.insertAdjacentHTML("beforeend", $cardGueio);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardfront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardfront);

