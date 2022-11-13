const map = document.getElementById('map')

let speed = 0.3, x = 1,
up = false,
right = false,
down = false,
left = false

document.addEventListener('keydown',press)
function press(e){
  if (e.keyCode === 68 /* right */){
    right = true
  }
  if (e.keyCode === 65 /* a */){
    left = true

  }if(e.keyCode === 32){
    shoot = true;
  }
}

document.addEventListener('keyup',release)
function release(e){
  if (e.keyCode === 68 /* d */){
    right = false
  }
  
  if (e.keyCode === 65 /* a */){
    left = false
  }
  if(e.keyCode === 32){
  shoot = false;
  }
}


// class germs



window.requestAnimationFrame(gameLoop)

function gameLoop(){
  if (right){
    x += 1 * 2
    map.style.transform = `rotate(${x}deg)`
    map.style.scale = 0.7
  }
  if (left){
    x -= 1 * 2
    map.style.transform = `rotate(${x}deg)`
    map.style.scale = 0.7
  }

window.requestAnimationFrame(gameLoop)
}
