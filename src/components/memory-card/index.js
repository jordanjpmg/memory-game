function createMemoryCard() {
  const $memoryCard = document.createElement("article");

  const $iconCollabe = `
  <img class= "icon"
  src='./images/icon-collabcode.svg'
  alt='Gueio Mascote da CollabCode'>
  </img>
`


  $memoryCard.classList.add("memory-card");
  $wrapCards.insertBefore($memoryCard, null)
  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollabe)

}


function createMemoryCardFront() {

  const $memoryCardFront = document.createElement("article");
  const $iconJavaScript = `
  <img class="icon"
    src="./images/-icon-js.png"
   alt="Icone de um livro de JavaScript">
  `;

  $memoryCardFront.classList.add("memory-card");
  $memoryCardFront.classList.add("-front");
  $wrapCards.insertBefore($memoryCardFront, null)
  $memoryCardFront.insertAdjacentHTML("afterbegin", $iconJavaScript)

}