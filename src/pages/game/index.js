const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard();
const $memoryCardfront = createMemoryCard("-front");



$root.insertAdjacentElement("beforeend", $cardsWrapper);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardfront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardfront);

