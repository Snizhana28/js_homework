let innerH1 = document.getElementById('innerH1')
let innerKeyCode = document.getElementById('innerKeyCode')
let innerKey = document.getElementById('innerKey')
let innerLocation = document.getElementById('innerLocation')
let innerCode = document.getElementById('innerCode')
let innerWhich = document.getElementById('innerWhich')

document.addEventListener('keydown', (e) => {
   innerH1.innerHTML = `JavaScript Key Code ${e.keyCode}`
   innerKeyCode.innerHTML = `${e.keyCode}`
   innerKey.innerHTML = `${e.key}`
   innerLocation.innerHTML = `${e.location}`
   innerCode.innerHTML = `${e.code}`
   innerWhich.innerHTML = `${e.which}`
})