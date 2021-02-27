window.onscroll = function(){
    scroll();
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
}

function scroll(){
    let btn = document.getElementById("btnTop");
    if(document.documentElement.scrollTop > 50){
      btn.style.display = "block";
    }else {
      btn.style.display = "none";
    }
  }
  function backToTop(){
    document.documentElement.scrollTop = 0;
  }