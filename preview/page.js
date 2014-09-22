$('#buttonText, hr').on('click', function() {
  $('#overlay').css('display', 'block');
  JSNativeCom.sendEventToNative('OFFER_SAVED');
})