function memoryCard() {
  const $head = document.querySelector("head");
  const $style = document.createElement("style")

  $style.textContent = `

  .memory-card{
    width: 155px;
    height: 155px;
    position: relative
    
  }

  .memory-card .-card{
    width:100%;
    height: 100%;
    background-color: #f25a70;
    border-radius: 30px;
    display: flex;
    justify-content: center;/*alinha o elemento no eixo x*/
    align-items: center;/*alinha o elemento no eixo y*/
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.26);
    position: relative;
    cursor: pointer;
    position:absolute;
  }

  .memory-card.-active .-card{
    display: none
  }

  memory-card.-active .-card.-front{
    display: flex
  }
  
  .memory-card .-card.-front{
    background-color: #fff;
    display:flex
  }
  
  .memory-card .-card.-front::before{
    content: "";
    width: 95px;
    height: 95px;
    background-color: #d4d4d4;
    border-radius: 50%;
    position: absolute;
  }
  
  .memory-card .-card > .icon{
    width: 100px;
    height: 100px;
  }
  
  .memory-card .-card.-front > .icon{
    position: absolute;
    transform: translateY(-7px)
  }
`
  $head.insertBefore($style, null)



  return ({ src, alt }) =>
    `<div class = "memory-card" onclick="handleClick(this)">
      <article class = "-card -front sobre ">
        <img
          class= "icon"
          src= "${src}"
          alt="${alt}"
        />
      </article>
      <article class = "-card ">
        <img
          class= "icon"
          src= "./images/icon-collabcode.svg"
          alt="Gueio Mascote da CollabCode"    
          />
      </article>
  </div>
`
};



let score = 0;

const handleClick = $conponent => {

  if (!$conponent.classList.contains("-active")) {
    if (qtdMemoryCardClic <= 1) {
      $conponent.classList.toggle("-active")
    }


    if (qtdMemoryCardClic === 1) {
      qtdMemoryCardClic = 0
      const $memoryCards = document.querySelectorAll(".memory-card.-active");
      if ($memoryCards[0].querySelector(".-front .icon").getAttribute("src") ===
        $memoryCards[1].querySelector(".-front .icon").getAttribute("src")) {
        score++
        console.log("seus pontos : ", score)
      } else {
        setTimeout(() => {
          const verificaActive = document.querySelectorAll(".memory-card.-active")
          verificaActive.forEach(removeActive => {
            removeActive.classList.remove("-active")
          })
        }, 1000)
      }
    }
  }

}
