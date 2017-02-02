$ ->
  $.getJSON 'http://demo.karmasoftonline.com/schedule.json', (data) ->
    console.log data
    daysLessons = ("<li>#{item.name}</li>" for item in data["dates"][1]["lessons"])
    $('#container').html daysLessons.join("")