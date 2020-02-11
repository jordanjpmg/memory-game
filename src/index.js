const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $icon = `<img
  src='./images/icon-collabcode.svg'
  alt='Gueio Mascote da CollabCode'
  class='icon'>
</img>`

$memoryCard.classList.add("memory-card");
//$memoryCard.innerHTML = $icon// innerHTMl não e performatica
$root.insertBefore($memoryCard, null)//Insere a constante $memoryCarde na $root
$memoryCard.insertAdjacentHTML("beforeend", $icon)
