$(document).ready(function() {
  $('.header__burger').click(function(event){ 
    $('.header__burger,.wrapper-menu,.nav-a').toggleClass('active')
    $('body').toggleClass('lock')
    $('.shop-nav,.search-nav,.regestar-nav').toggleClass('disable')
  })
});