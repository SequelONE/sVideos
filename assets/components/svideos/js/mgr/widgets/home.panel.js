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
            html: '<h2>' + _('svideos') + '</h2>',
            cls: '',
            style: {margin: '15px 0'}
        }, {
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: true,
            hideMode: 'offsets',
            items: [{
                title: _('svideos_categories'),
                layout: 'anchor',
                items: [{
                    html: _('svideos_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'svideos-grid-categories',
                    cls: 'main-wrapper',
                }]
            }, {
                title: _('svideos_videos'),
                layout: 'anchor',
                items: [{
                    html: _('svideos_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'svideos-grid-videos',
                    cls: 'main-wrapper',
                }]
            }]
        }]
    });
    sVideos.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(sVideos.panel.Home, MODx.Panel);
Ext.reg('svideos-panel-home', sVideos.panel.Home);
