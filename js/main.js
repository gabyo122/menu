$('.rm-button-open').on('click', function(e){
  e.preventDefault()
  $('.left').addClass('left2');

  setTimeout(function(){

    $('.right').addClass('right2');

  }, 300)
  
})

$('.rm-close').on('click', function(e){
  e.preventDefault()
  
  $('.right').removeClass('right2');
  
  setTimeout(function(){
    
    $('.left').removeClass('left2');
    $('.right').addClass('right3');

  }, 300)

  // $('.right').css("transform-origin", right)

  
})