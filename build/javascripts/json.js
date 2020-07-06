$(function() {
    var console_style;
    console_style = 'background: #1a901e;border-radius: 3px;color: #fff;';
    $.getJSON("https://qa1.karmasoft.io"  + "/schedule.json", function(data) {
        var schedule;
        console.log('%c Schedule: ', console_style);
        console.log(data);
        schedule = "<td>" + data.dates[1].day_name + " / " + data.dates[1].wday + " / " + data.dates[1].long + "</td>";
        return $('#schedule').replaceWith(schedule);
    });
    $.getJSON("https://qa1.karmasoft.io"  + "/member/workshops.json", function(data) {
        var workshops;
        console.log('%c Workshops: ', console_style);
        console.log(data);
        workshops = "<td>" + data[1].name + " / " + data[1].start_date + " / " + data[1].timetable + "</td>";
        return $('#workshops').replaceWith(workshops);
    });
    $.getJSON("https://qa1.karmasoft.io"  + "/users/profiles.json", function(data) {
        var instructors;
        console.log('%c Instructors: ', console_style);
        console.log(data);
        instructors = "<td>" + data[1].name + " / " + data[1].schedule_url + "</td>";
        return $('#instructors').replaceWith(instructors);
    });
    return $.getJSON("https://qa1.karmasoft.io"  + "/member/store.json", function(data) {
        var store;
        console.log('%c Store: ', console_style);
        console.log(data);
        store = "<td>" + data[1].name + " / " + data[1].tax + " / " + data[1].type + "</td>";
        return $('#store').replaceWith(store);
    });
});
