sVideos.window.CreateCategory = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'svideos-category-window-create';
    }
    Ext.applyIf(config, {
        title: _('svideos_category_create'),
        width: 550,
        autoHeight: true,
        url: sVideos.config.connector_url,
        action: 'mgr/category/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    sVideos.window.CreateCategory.superclass.constructor.call(this, config);
};
Ext.extend(sVideos.window.CreateCategory, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('svideos_category_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('svideos_category_alias'),
            name: 'alias',
            id: config.id + '-alias',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('svideos_category_active'),
            name: 'active',
            id: config.id + '-active',
            checked: true,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('svideos-category-window-create', sVideos.window.CreateCategory);


sVideos.window.UpdateCategory = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'svideos-category-window-update';
    }
    Ext.applyIf(config, {
        title: _('svideos_category_update'),
        width: 550,
        autoHeight: true,
        url: sVideos.config.connector_url,
        action: 'mgr/category/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    sVideos.window.UpdateCategory.superclass.constructor.call(this, config);
};
Ext.extend(sVideos.window.UpdateCategory, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('svideos_category_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: _('svideos_category_alias'),
            name: 'alias',
            id: config.id + '-alias',
            anchor: '99%',
            allowBlank: true,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('svideos_category_active'),
            name: 'active',
            id: config.id + '-active',
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('svideos-category-window-update', sVideos.window.UpdateCategory);