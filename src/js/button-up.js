function scrollTo(element) {
  window.scroll({
    left: 0, 
    top: element.offsetTop, 
    behavior: 'smooth'
  })
}

var button = document.querySelector('.button-up');
var footer = document.querySelector('#header');

button.addEventListener('click', () => {
  scrollTo(header);
})