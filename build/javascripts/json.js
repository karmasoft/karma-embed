$(function() {
    var console_style;
    console_style = 'background: #1a901e;border-radius: 3px;color: #fff;';
    $.getJSON("https://demo.karmasoft.io"  + "/schedule.json", function(data) {
        var schedule;
        console.log('%c Schedule: ', console_style);
        console.log(data);
        schedule = "<td>" + data.dates[0].day_name + " / " + data.dates[0].wday + " / " + data.dates[0].long + "</td>";
        return $('#schedule').replaceWith(schedule);
    });
    $.getJSON("https://demo.karmasoft.io"  + "/member/workshops.json", function(data) {
        var workshops;
        console.log('%c Workshops: ', console_style);
        console.log(data);
        workshops = "<td>" + data[0].name + " / " + data[0].start_date + " / " + data[0].timetable + "</td>";
        return $('#workshops').replaceWith(workshops);
    });
    $.getJSON("https://demo.karmasoft.io"  + "/users/profiles.json", function(data) {
        var instructors;
        console.log('%c Instructors: ', console_style);
        console.log(data);
        instructors = "<td>" + data[0].name + " / " + data[0].schedule_url + "</td>";
        return $('#instructors').replaceWith(instructors);
    });
    $.getJSON("https://demo.karmasoft.io"  + "/member/store.json", function(data) {
        var store;
        console.log('%c Store: ', console_style);
        console.log(data);
        store = "<td>" + data[0].name + " / " + data[0].tax + " / " + data[0].type + "</td>";
        return $('#store').replaceWith(store);
    });
});
