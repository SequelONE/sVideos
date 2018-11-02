sVideos.window.CreateVideo = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'svideos-video-window-create';
    }
    Ext.applyIf(config, {
        title: _('svideos_video_create'),
        width: 550,
        autoHeight: true,
        url: sVideos.config.connector_url,
        action: 'mgr/video/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    sVideos.window.CreateVideo.superclass.constructor.call(this, config);
};
Ext.extend(sVideos.window.CreateVideo, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'modx-combo-browser',
            fieldLabel: _('svideos_video_image'),
            name: 'image',
            id: config.id + '-image',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('svideos_video_title'),
            name: 'title',
            id: config.id + '-title',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('svideos_video_longtitle'),
            name: 'longtitle',
            id: config.id + '-longtitle',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('svideos_video_description'),
            name: 'description',
            id: config.id + '-description',
            height: 150,
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textarea',
            fieldLabel: _('svideos_video_keywords'),
            name: 'keywords',
            id: config.id + '-keywords',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'htmleditor',
            fieldLabel: _('svideos_video_content'),
            name: 'content',
            id: config.id + '-content',
            height: 150,
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'svideos-combo-category',
            fieldLabel: _('svideos_video_category'),
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('svideos_video_code'),
            name: 'code',
            id: config.id + '-code',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('svideos_video_alias'),
            name: 'alias',
            id: config.id + '-alias',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('svideos_video_genre'),
            name: 'genre',
            id: config.id + '-genre',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('svideos_video_channel_name'),
            name: 'channel_name',
            id: config.id + '-channel_name',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('svideos_video_keys'),
            name: 'keys',
            id: config.id + '-keys',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('svideos_video_createdby'),
            name: 'createdby',
            id: config.id + '-createdby',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'xdatetime',
            fieldLabel: _('svideos_video_createdon'),
            name: 'createdon',
            id: config.id + '-createdon',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'xdatetime',
            fieldLabel: _('svideos_video_editedon'),
            name: 'editedon',
            id: config.id + '-editedon',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('svideos_video_active'),
            name: 'active',
            id: config.id + '-active',
            checked: true,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('svideos-video-window-create', sVideos.window.CreateVideo);


sVideos.window.UpdateVideo = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'svideos-video-window-update';
    }
    Ext.applyIf(config, {
        title: _('svideos_video_update'),
        width: 550,
        autoHeight: true,
        url: sVideos.config.connector_url,
        action: 'mgr/video/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    sVideos.window.UpdateVideo.superclass.constructor.call(this, config);
};
Ext.extend(sVideos.window.UpdateVideo, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'modx-combo-browser',
            fieldLabel: _('svideos_video_image'),
            name: 'image',
            id: config.id + '-image',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('svideos_video_title'),
            name: 'title',
            id: config.id + '-title',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('svideos_video_longtitle'),
            name: 'longtitle',
            id: config.id + '-longtitle',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('svideos_video_description'),
            name: 'description',
            id: config.id + '-description',
            height: 150,
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textarea',
            fieldLabel: _('svideos_video_keywords'),
            name: 'keywords',
            id: config.id + '-keywords',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'htmleditor',
            fieldLabel: _('svideos_video_content'),
            name: 'content',
            id: config.id + '-content',
            height: 150,
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'svideos-combo-category',
            fieldLabel: _('svideos_video_category'),
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('svideos_video_code'),
            name: 'code',
            id: config.id + '-code',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('svideos_video_alias'),
            name: 'alias',
            id: config.id + '-alias',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('svideos_video_genre'),
            name: 'genre',
            id: config.id + '-genre',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('svideos_video_channel_name'),
            name: 'channel_name',
            id: config.id + '-channel_name',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('svideos_video_keys'),
            name: 'keys',
            id: config.id + '-keys',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'textfield',
            fieldLabel: _('svideos_video_createdby'),
            name: 'createdby',
            id: config.id + '-createdby',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'xdatetime',
            fieldLabel: _('svideos_video_createdon'),
            name: 'createdon',
            id: config.id + '-createdon',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'xdatetime',
            fieldLabel: _('svideos_video_editedon'),
            name: 'editedon',
            id: config.id + '-editedon',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('svideos_video_active'),
            name: 'active',
            id: config.id + '-active',
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('svideos-video-window-update', sVideos.window.UpdateVideo);