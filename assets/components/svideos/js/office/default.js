Ext.onReady(function () {
    sVideos.config.connector_url = OfficeConfig.actionUrl;

    var grid = new sVideos.panel.Home();
    grid.render('office-svideos-wrapper');

    var preloader = document.getElementById('office-preloader');
    if (preloader) {
        preloader.parentNode.removeChild(preloader);
    }
});