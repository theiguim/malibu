document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
  
    menuBtn.addEventListener('click', function() {
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'block';
      }
    });
  });
  

  window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var nav = document.querySelector('.menu')
    var aboutSection = document.querySelector('#about');
    
    var sectionTop = aboutSection.offsetTop;
    var scrollPosition = window.scrollY;
    
    if (scrollPosition >= sectionTop) {
        header.style.backgroundColor = '#000'; // Altera o fundo do cabeçalho para preto ao rolar sobre a seção #about
        nav.style.backgroundColor = '#000';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.151)'; // Restaura o fundo transparente do cabeçalho se não estiver rolando sobre a seção #about
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.151)';
      }
});
