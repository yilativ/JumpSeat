appAPI.ready(function($) {
    var hostname = appAPI.db.get('hostname');
    alert("tset");
    appAPI.dom.addRemoteJS({
        url: hostname + '/aerospace',
        additionalAttributes: { charset: "UTF-8" },
        callback: function() {
        }
    }) ;
});
