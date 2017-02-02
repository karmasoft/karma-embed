(function() {
  $(function() {
    return $.getJSON('https://demo.karmasoftonline.com/schedule.json', function(data) {
      var daysLessons, item;
      console.log(data);
      daysLessons = (function() {
        var i, len, ref, results;
        ref = data["dates"][1]["lessons"];
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push("<li>" + item.name + "</li>");
        }
        return results;
      })();
      return $('#container').html(daysLessons.join(""));
    });
  });

}).call(this);
