const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal-button");
const closeButton = document.querySelector(".close-button");
const scrollDown = document.querySelector(".scroll-down");
let isOpened = false;

const openModal = () => {
  modal.classList.add("is-open");
  body.style.overflow = "hidden";
  $('.modal').css({'z-index':'9'});
};

const closeModal = () => {
  modal.classList.remove("is-open");
  body.style.overflow = "initial";
  $('.modal').css({'z-index':'-1'});
};

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 3 && !isOpened) {
    isOpened = true;
    scrollDown.style.display = "none";
    openModal();
  }
});
/*
modalButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);*/

document.onkeydown = evt => {
  evt = evt || window.event;
  evt.keyCode === 27 ? closeModal() : false;
};






/*Menu*/
$('#toggle').click(function() {
   $("#rotate").toggleClass('active-rotate');
   $('#overlay').toggleClass('open');
   $('.rotate-text').hide();
   $('.toogle-btn').css("top","-30px");
});


/*Menu active */
$( document ).ready(function() {  
  var selector = '.container-navegation__menu-items .item';
  var icon= $('.icono-menu');
  
  var pGeneral =  $('.container-pages');
  var pHome =  $('.container-page--home');
  var pAbout =  $('.container-page--aboutMe');
  var pPortfolio =  $('.container-page--portfolio');
  var pBlog =  $('.container-investigation');

  $(selector).unbind('click');

  $(selector).bind('click', function(){
      $(selector).removeClass('active-page');
      $(this).addClass('active-page');
      /*
      $('.mode-night').fadeToggle();
      $('.frm-login').fadeToggle();
      */

      if ( $(window).width() <= 600) {  
        if ( $(this).is("#home") ) { 
          $('.container-page--home').css({"transform":"translateY(-100.5%)", "opacity":"1"});
          $('.container-page--aboutMe').css({"transform":"translateY(0%)", "opacity":"0"});
          $('.container-investigation').css({"transform":"translateY(0%)", "opacity":"0"});
          $('.icono-menu').css({"transform":"translateY(0px)"});
          $('.container-page--portfolio').css({"transform":"translateY(0%)", "opacity":"0"});
        }

        else if($(this).is("#aboutMe")){
          $('.container-page--aboutMe').css({"transform":"translateY(-100.5%)", "opacity":"1"});
          $('.container-page--home').css({"transform":"translateY(0%)", "opacity":"0"});
          $('.container-investigation').css({"transform":"translateY(0%)", "opacity":"0"});
          $('.container-page--portfolio').css({"transform":"translateY(0%)", "opacity":"0"});
        }

        else if($(this).is("#portfolio")){
          $('.container-page--portfolio').css({"transform":"translateY(-100.5%)", "opacity":"1"});
          $('.container-page--aboutMe').css({"transform":"translateY(0%)", "opacity":"0"});
          $('.container-page--home').css({"transform":"translateY(0%)", "opacity":"0"});
          $('.container-investigation').css({"transform":"translateY(0%)", "opacity":"0"});
        }

        else if($(this).is("#news")){
          $('.container-page--home').css({"transform":"translateY(0%)", "opacity":"0"});
          $('.container-page--aboutMe').css({"transform":"translateY(0%)", "opacity":"0"});
          $('.container-investigation').css({"transform":"translateY(-200%)", "opacity":"1"});
          $('.icono-menu').css({"transform":"translateY(75px)"});
          $('.container-page--portfolio').css({"transform":"translateY(0%)", "opacity":"0"});
        }

      }

      else if( $(window).width() >= 600) {
        switch($(this).attr('id')){
          case "home":
            icon.css({"transform":"translateY(0px)"}); 
            pGeneral.css({"width":"70%"});
            pHome.css({"z-index":"999","width":"100%","opacity":"1"});
            pAbout.css({"z-index":"0","opacity":"0"});
            pPortfolio.css({"z-index":"0","opacity":"0"});

            pBlog.css({"width":"17%"});
            $('.container-investigation__groupNews-news').css({"width":"100%"});
          break;
          case "aboutMe":
            icon.css({"transform":"translateY(25px)"});
            pGeneral.css({"width":"70%"});
            pHome.css({"z-index":"0","opacity":"0"});
            pAbout.css({"z-index":"999","width":"100%","opacity":"1"});
            pPortfolio.css({"z-index":"999","opacity":"0"});

            pBlog.css({"width":"17%"});
            $('.container-investigation__groupNews-news').css({"width":"100%"});

          break;
          case "portfolio":
            icon.css({"transform":"translateY(50px)"});
            pGeneral.css({"width":"70%"});
            pHome.css({"z-index":"0","opacity":"0"});
            pAbout.css({"z-index":"0","opacity":"0"});
            pPortfolio.css({"z-index":"999","width":"100%","opacity":"1"});
            pBlog.css({"width":"17%"});
            $('.container-investigation__groupNews-news').css({"width":"100%"});

            pPortfolio.css({"width":"100%"});
          break;
          case "news":
            icon.css({"transform":"translateY(75px)"});
            pGeneral.css({"width":"0%"});
            
            pBlog.css({"width":"100%","z-index":"999"});

            pHome.css({"width":"0%","opacity":"0"}); 
            pAbout.css({"width":"0%","opacity":"0"});
            pPortfolio.css({"width":"0%","opacity":"0"});

            pBlog.css({"width":"87%"});
            /*1920*/
            if($(window).width() > 1300){
              $('.container-investigation__groupNews-news').css({"width":"20%"});
            }else{
              $('.container-investigation__groupNews-news').css({"width":"32.33%"});
            }
            
          break;
        }
      }

    });
});