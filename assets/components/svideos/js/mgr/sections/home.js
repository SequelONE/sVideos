sVideos.page.Home = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        components: [{
            xtype: 'svideos-panel-home',
            renderTo: 'svideos-panel-home-div'
        }]
    });
    sVideos.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(sVideos.page.Home, MODx.Component);
Ext.reg('svideos-page-home', sVideos.page.Home);