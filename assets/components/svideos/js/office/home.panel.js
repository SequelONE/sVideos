sVideos.panel.Home = function (config) {
    config = config || {};
    Ext.apply(config, {
        baseCls: 'modx-formpanel',
        layout: 'anchor',
        /*
         stateful: true,
         stateId: 'svideos-panel-home',
         stateEvents: ['tabchange'],
         getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
         */
        hideMode: 'offsets',
        items: [{
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: false,
            hideMode: 'offsets',
            items: [{
                title: _('svideos_items'),
                layout: 'anchor',
                items: [{
                    html: _('svideos_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'svideos-grid-items',
                    cls: 'main-wrapper',
                }]
            }]
        }]
    });
    sVideos.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(sVideos.panel.Home, MODx.Panel);
Ext.reg('svideos-panel-home', sVideos.panel.Home);
