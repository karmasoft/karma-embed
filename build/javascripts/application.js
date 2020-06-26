(function() {
  $(document).ready(function() {
    return $('#mobileCheck').change(function() {
      if ($('#mobileCheck').is(':checked')) {
        $('footer').hide();
        $('.iphone').css('display', 'block');
        return $('#container').addClass('change-screen');
      } else {
        $('iframe').iFrameResize().resize();
        $('footer').show();
        $('.iphone').css('display', 'none');
        return $('#container').removeClass('change-screen');
      }
    });
  });

}).call(this);
