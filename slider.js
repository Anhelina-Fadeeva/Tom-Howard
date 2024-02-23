
/* Вариант 2- плавное смещение карточек JQUERY*/

$(document).ready(function () {
    var width = 465; // ширина карточки
    var count = 1; // видимое количество карточек
    var list = $('.slider');
    var listElems = $('.article');

    var position = 0; // положение ленты прокрутки
    
    // определяем максимальное количество карточек 
    
    var maxElems = 4;

    $('#btnLeft').click (function() {
      // сдвиг влево
      position += width * count;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0)
      
       list.css({ transform: `translatex(${position}px)` });
      
    });

    $('#btnRight').click (function() {
      
       // сдвиг вправо
      position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position =Math.max(position, -width * (maxElems-1 - count));   
      
      list.css({ transform: `translatex(${position}px)` });  
      
    });
    

 

//Открыть бургер меню
    $(".burger-menu ").on("click",".icon_menu",function(){
  
  $(".menu-mobile").slideToggle();
   $(".icon_menu").toggleClass('change');
 

 });
//кнопка прокрутки вверх

var btn = $('.arrowUp');
   $(window).scroll(function() {
     if ($(window).scrollTop() > 300) {
       btn.addClass('arrowUp_Show');
     } else {
       btn.removeClass('arrowUp_Show');
     }
   }); 
   
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });

 })