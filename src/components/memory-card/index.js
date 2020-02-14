const createMemoryCard = (nameClass) => {

  return (`
  <article class = "memory-card ${nameClass} ">
    <img
      class= "icon"
      src= "${nameClass === "-front" ? "./images/icon-js.png" : "./images/icon-collabcode.svg"}"
      alt='Gueio Mascote da CollabCode'
      onclick = "handleClick()">
    </img>
  </article>
`);
}



const handleClick = () => {
  createMemoryCard.classList.toogle("-front")
}

