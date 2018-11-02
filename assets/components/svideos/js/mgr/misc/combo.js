sVideos.combo.Search = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        xtype: 'twintrigger',
        ctCls: 'x-field-search',
        allowBlank: true,
        msgTarget: 'under',
        emptyText: _('search'),
        name: 'query',
        triggerAction: 'all',
        clearBtnCls: 'x-field-search-clear',
        searchBtnCls: 'x-field-search-go',
        onTrigger1Click: this._triggerSearch,
        onTrigger2Click: this._triggerClear,
    });
    sVideos.combo.Search.superclass.constructor.call(this, config);
    this.on('render', function () {
        this.getEl().addKeyListener(Ext.EventObject.ENTER, function () {
            this._triggerSearch();
        }, this);
    });
    this.addEvents('clear', 'search');
};
Ext.extend(sVideos.combo.Search, Ext.form.TwinTriggerField, {

    initComponent: function () {
        Ext.form.TwinTriggerField.superclass.initComponent.call(this);
        this.triggerConfig = {
            tag: 'span',
            cls: 'x-field-search-btns',
            cn: [
                {tag: 'div', cls: 'x-form-trigger ' + this.searchBtnCls},
                {tag: 'div', cls: 'x-form-trigger ' + this.clearBtnCls}
            ]
        };
    },

    _triggerSearch: function () {
        this.fireEvent('search', this);
    },

    _triggerClear: function () {
        this.fireEvent('clear', this);
    },

});
sVideos.combo.Category = function (config) {
    config = config || {};

    Ext.applyIf(config, {
        name: 'category_id',
        fieldLabel: _('categories_' + config.name || 'category'),
        hiddenName: 'category_id',
        displayField: 'name',
        valueField: 'id',
        anchor: '99%',
        fields: ['name', 'id'],
        pageSize: 20,
        url: sVideos.config['connector_url'],
        typeAhead: true,
        editable: true,
        allowBlank: true,
        emptyText: _('no'),
        minChars: 1,
        baseParams: {
            action: 'mgr/category/getlist',
            combo: true,
            id: config.value,
        }
    });
    sVideos.combo.Category.superclass.constructor.call(this, config);
    this.on('expand', function () {
        if (!!this.pageTb) {
            this.pageTb.show();
        }
    });
};
Ext.extend(sVideos.combo.Category, MODx.combo.ComboBox);
Ext.reg('svideos-combo-category', sVideos.combo.Category);
Ext.reg('svideos-combo-search', sVideos.combo.Search);
Ext.reg('svideos-field-search', sVideos.combo.Search);