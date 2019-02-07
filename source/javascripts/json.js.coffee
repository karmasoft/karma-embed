$ ->
  console_style = 'background: #1a901e;border-radius: 3px;color: #fff;'

  $.getJSON 'https://demo.karmasoftonline.com/schedule.json', (data) ->
    console.log '%c Schedule: ', console_style
    console.log data
    schedule = ("<td>#{data.dates[1].day_name} / #{data.dates[1].wday} / #{data.dates[1].long}</td>")
    $('#schedule').replaceWith schedule

  $.getJSON 'https://demo.karmasoftonline.com/member/workshops.json', (data) ->
    console.log '%c Workshops: ', console_style
    console.log data
    workshops = ("<td>#{data[1].name} / #{data[1].start_date} / #{data[1].timetable}</td>")
    $('#workshops').replaceWith workshops

  $.getJSON 'https://demo.karmasoftonline.com/users/profiles.json', (data) ->
    console.log '%c Instructors: ', console_style
    console.log data
    instructors = ("<td>#{data[1].name} / #{data[1].schedule_url}</td>")
    $('#instructors').replaceWith instructors

  $.getJSON 'https://demo.karmasoftonline.com/member/store.json', (data) ->
    console.log '%c Store: ', console_style
    console.log data
    store = ("<td>#{data[1].name} / #{data[1].tax} / #{data[1].type}</td>")
    $('#store').replaceWith store