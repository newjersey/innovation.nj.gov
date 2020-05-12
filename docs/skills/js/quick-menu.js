var sticky = document.querySelector('.sticky');
var page = document.querySelector('.page-body');
var header = document.querySelector('.state-header');
var padding = document.querySelector('.interview-section');
var els = document.querySelectorAll('.quick-menu')
var menu = document.querySelector('.quick-menu');
var origOffsetY = sticky.offsetTop;


function onScroll(e) {
  for (var i = 0; i < els.length; i++) {
  if (window.scrollY >= origOffsetY-50) {
    sticky.classList.remove('sticky');
    sticky.classList.add('fixed');
    els[i].classList.remove('quick-menu');
    els[i].classList.add('vertical');
  }
  else 
  {
    sticky.classList.remove('fixed');
    sticky.classList.add('sticky');
    els[i].classList.remove('vertical');
    els[i].classList.add('quick-menu');
  }
  }
  if (window.scrollY >= origOffsetY-50) {
    page.classList.remove('page-body');
    page.classList.add('page-body-rep');
    padding.classList.add('padding');
 
  }
  else 
  {
    page.classList.remove('page-body-rep');
    page.classList.add('page-body');
    padding.classList.remove('padding');        
  }                      
}

document.addEventListener('scroll', onScroll);
document.attachEvent("onscroll", onScroll);
