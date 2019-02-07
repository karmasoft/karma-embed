$(document).ready ->
  $('#defaultCheck1').change ->
    if $('#defaultCheck1').is ':checked'
      $('.iphone').css('display', 'block')
      $('#container').addClass('change-screen')
    else
      $('.iphone').css('display', 'none')
      $('#container').removeClass('change-screen')


$ ->
  $.getJSON 'https://demo.karmasoftonline.com/schedule.json', (data) ->
    console.log data
    daysLessons = ("<li>#{item.name}</li>" for item in data["dates"][1]["lessons"])
    $('#container').html daysLessons.join("")