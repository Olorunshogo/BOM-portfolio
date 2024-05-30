
// =================== TYPING ANIMATION
var typed = new Typed(".typing-home",{
    strings:["", "Web Designer", "Web Developer", "Software Engineer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})


// var typed = new Typed('.web-dev', {
//     strings: ['Web Designer', 'Web Developer', "Software Engineer"],
//     typeSpeed: 50,
//   });

$(document).ready(function(){
    var typed = new Typed('.web-dev', {
      strings: ["Web Developer", "Web Designer", "Software Engineer"],
      typeSpeed: 50,
      backSpeed: 20,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true,
      backDelay: 1000,
      startDelay: 500
    });
  });