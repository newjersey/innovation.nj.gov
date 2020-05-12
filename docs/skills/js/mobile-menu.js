     var sticky = document.querySelector('.sticky');
     var sticky_6 = document.querySelector('.sticky-6');
     var els_6 = document.querySelectorAll('.quick-menu-6');
     var padding = document.querySelector('.interview-section');
     var origOffsetY_6 = sticky.offsetTop;
     const mq = window.matchMedia("screen and (min-width: 320px) and (max-width: 600px)");

     function onScroll(e) {
       if(mq.matches){
      for (var i = 0; i < els_6.length; i++) {
      if (window.scrollY >= (origOffsetY_6)-50) {
        sticky_6.classList.remove('sticky-6');
        sticky_6.classList.add('fixed-6');
        sticky.classList.remove('show');
        sticky.classList.add('hide');
        els_6[i].classList.remove('quick-6');
        els_6[i].classList.add('vertical-6');
      }
      else 
      {
        sticky_6.classList.remove('fixed-6');
        sticky_6.classList.add('sticky-6');
        sticky.classList.remove('hide');
        sticky.classList.add('show');
        els_6[i].classList.remove('vertical-6');
        els_6[i].classList.add('quick-6');

      }
      }
     
      if (window.scrollY >= (origOffsetY_6)-50) {
        sticky_6.classList.remove('hide');
        sticky_6.classList.add('show');
        padding.classList.remove('padding');
        header.classList.remove('hide');
        header.classList.add('show');
      }
      else 
      {
        sticky_6.classList.remove('show');
        sticky_6.classList.add('hide');
        padding.classList.remove('padding');
        header.classList.remove('hide');
        header.classList.add('show');
      }  
    }
     }     
  document.addEventListener('scroll', onScroll);   