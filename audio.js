$(document).ready(function() {
    var sid = $.cookie('sid');
   	$.cometd.init({
        url: window.location.protocol + '//' + window.location.hostname + '/cometd/28.0/',
        requestHeaders: {Authorization: 'OAuth ' + sid}
      });

    $.cometd.subscribe('/topic/AudioCreates', function(message) {
		    $('#theAudio').attr('src', message.data.sobject.Resource_Name__c).trigger('play');
     	});
});
