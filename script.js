let stop = {}
let blurLevel = 2
let colors = ['#D00010', '#FEC641', '#63C13B', '#FE0016', '#5C6C94', '#6B0D05', '#7D0006', '#DB1913', '#FEE34A',' #2F8A27']
let totalAnimation = 5

document.addEventListener('DOMContentLoaded', function(){
  createfigurs()
})

function createfigurs() {
  let number = 150
  for (let i = 0; i < number; i++) {
    let width = 20 + sumRandomParametrs(25)
    // let left = 

    // let top = cheackOffset(height)

    let top = rand(100);
    let left = rand(100);

    let color_ID = rand(colors.length)
    let newDiv = document.createElement('div')
    newDiv.classList.add('light')
    let blur = blurLevel + rand(blurLevel)
    let animation = 1 + rand(totalAnimation);
    let lightDelay = 20 + rand(25)
    document.getElementById('root').appendChild(newDiv).setAttribute('style', 'background-color:red; width: ' + width + 'px; height: ' + width + 'px;  background-color: ' + colors[color_ID] + '; filter: blur(' + blur + 'px); animation: ' + lightDelay + 's light' + animation + ' linear infinite; top: ' + top + '%; left: ' + left + '%')
  }
//   let mess = document.getElementById('text').value
//   let el = document.getElementById('h1')
//   if (typeof el.textContent !== "undefined") {
//     el.textContent = mess
//   } else {
//     el.innerText = mess
//   }
//   changeColorH1()
}

// function clean() {
//   let tablediv = document.getElementById('table').cloneNode(true)
//   // tablediv.removeChild('div')
//   let elem = document.body.getElementsByTagName('div')
//   elem = Array.from(elem)
//   console.log(elem)
//   tablediv.removeChild(document.getElementsByTagName('div'))
// }
function rand(max) {
    return Math.floor(Math.random() * max)
}

function sumRandomParametrs(maxValue) {
  let a = Math.floor(Math.random() * 10)
  return Math.floor(Math.random() * maxValue) + a
}
function cheackOffset(a) {
  let b = Math.floor(Math.random() * 100) - 5
  if (a + b > 120) {
    cheackOffset(a, b)
  } else {
    return b
  }
}
function generateColor() {
  let color = []
  let chanel
  for (i = 0; i < 3; i++) {
    if (i === stop.chanel) {
      chanel = stop.color
    } else {
      chanel = sumRandomParametrs(225)
    }
    color[i] = chanel
  }
  return color.join()
}

function readText(a) {
  let text = document.getElementById(a).value
  text = Number.parseInt(text)
  return text
}

function changeColorH1() {
  let el = document.getElementById('color')
  if ( el.selectedIndex != -1) {
    if ( el.selectedIndex === 0 ) {
      document.getElementById('h1').setAttribute('style', 'color: black')
    } else {
      document.getElementById('h1').setAttribute('style', 'color: white')
    }
  }
}
