setRandomClass();
setInterval(function () {
  setRandomClass();
}, 2000);//number of milliseconds (2000 = 2 seconds)

function setRandomClass() {
  var items = document.querySelectorAll('circle')
  var number = items.length;
  var random = Math.floor((Math.random() * number));
  items[random].classList.add('banaan')
  setInterval(function () {
    items[random].classList.remove('banaan')
  }, 20000)

}
