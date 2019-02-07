$(document).ready ->
  $('#mobileCheck').change ->
    if $('#mobileCheck').is ':checked'
      $('footer').hide()
      $('.iphone').css('display', 'block')
      $('#container').addClass('change-screen')
    else
      $('iframe').iFrameResize().resize()
      $('footer').show()
      $('.iphone').css('display', 'none')
      $('#container').removeClass('change-screen')