const createMemoryCard = (src, alt, nameClass) => {

  return (`
  <article class = "memory-card ${nameClass} ">
    <img
      class= "icon"
      src= "${src}"
      alt="${alt}    
      onclick = "handleClick()">
    </img>
  </article>
`);
}



const handleClick = () => {
  createMemoryCard.classList.toogle("-front")
}

