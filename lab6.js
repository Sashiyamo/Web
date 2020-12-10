window.onload = () => {
  let button = document.getElementById('button1')
  console.log(button)
  button.onclick = (e) => {
    let abc = document.getElementById('con')
    abc.style.setProperty('display', 'block')
    setTimeout(() => {
      abc.style.setProperty('display', 'none')
    }, 2000)
  }

  let image = document.getElementsByClassName('fs-image')
  for(let i = 0; i < image.length; i++){
    let l = image[i]
    l.ondblclick = () => {
    l.requestFullscreen()
    }
   }
}
