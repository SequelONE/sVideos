sVideos.grid.Videos = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'svideos-grid-videos';
    }
    Ext.applyIf(config, {
        url: sVideos.config.connector_url,
        fields: this.getFields(config),
        columns: this.getColumns(config),
        tbar: this.getTopBar(config),
        sm: new Ext.grid.CheckboxSelectionModel(),
        baseParams: {
            action: 'mgr/video/getlist'
        },
        listeners: {
            rowDblClick: function (grid, rowIndex, e) {
                var row = grid.store.getAt(rowIndex);
                this.updateVideo(grid, e, row);
            }
        },
        viewConfig: {
            forceFit: true,
            enableRowBody: true,
            autoFill: true,
            showPreview: true,
            scrollOffset: 0,
            getRowClass: function (rec) {
                return !rec.data.active
                    ? 'svideos-grid-row-disabled'
                    : '';
            }
        },
        paging: true,
        remoteSort: true,
        autoHeight: true,
    });
    sVideos.grid.Videos.superclass.constructor.call(this, config);

    // Clear selection on grid refresh
    this.store.on('load', function () {
        if (this._getSelectedIds().length) {
            this.getSelectionModel().clearSelections();
        }
    }, this);
};
Ext.extend(sVideos.grid.Videos, MODx.grid.Grid, {
    windows: {},

    getMenu: function (grid, rowIndex) {
        var ids = this._getSelectedIds();

        var row = grid.getStore().getAt(rowIndex);
        var menu = sVideos.utils.getMenu(row.data['actions'], this, ids);

        this.addContextMenuVideo(menu);
    },

    createVideo: function (btn, e) {
        var w = MODx.load({
            xtype: 'svideos-video-window-create',
            id: Ext.id(),
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        });
        w.reset();
        w.setValues({active: true});
        w.show(e.target);
    },

    updateVideo: function (btn, e, row) {
        if (typeof(row) != 'undefined') {
            this.menu.record = row.data;
        }
        else if (!this.menu.record) {
            return false;
        }
        var id = this.menu.record.id;

        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/video/get',
                id: id
            },
            listeners: {
                success: {
                    fn: function (r) {
                        var w = MODx.load({
                            xtype: 'svideos-video-window-update',
                            id: Ext.id(),
                            record: r,
                            listeners: {
                                success: {
                                    fn: function () {
                                        this.refresh();
                                    }, scope: this
                                }
                            }
                        });
                        w.reset();
                        w.setValues(r.object);
                        w.show(e.target);
                    }, scope: this
                }
            }
        });
    },

    removeVideo: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.msg.confirm({
            title: ids.length > 1
                ? _('svideos_videos_remove')
                : _('svideos_video_remove'),
            text: ids.length > 1
                ? _('svideos_videos_remove_confirm')
                : _('svideos_video_remove_confirm'),
            url: this.config.url,
            params: {
                action: 'mgr/video/remove',
                ids: Ext.util.JSON.encode(ids),
            },
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        });
        return true;
    },

    disableVideo: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/video/disable',
                ids: Ext.util.JSON.encode(ids),
            },
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        })
    },

    enableVideo: function () {
        var ids = this._getSelectedIds();
        if (!ids.length) {
            return false;
        }
        MODx.Ajax.request({
            url: this.config.url,
            params: {
                action: 'mgr/video/enable',
                ids: Ext.util.JSON.encode(ids),
            },
            listeners: {
                success: {
                    fn: function () {
                        this.refresh();
                    }, scope: this
                }
            }
        })
    },

    getFields: function () {


        return ['id', 'category_name', 'title', 'image', 'code', 'alias', 'user', 'createdon', 'editedon', 'active', 'actions'];
    },

    getColumns: function () {
        return [{
            header: _('svideos_video_id'),
            dataIndex: 'id',
            sortable: true,
            width: 70
        }, {
            header: _('svideos_video_image'),
            dataIndex: 'image',
            sortable: true,
            width: 200,
            renderer: function(value){
                if(value)
                    return '<img width="200" src="/' + value + '">';
            }
        }, {
            header: _('svideos_video_title'),
            dataIndex: 'title',
            sortable: true,
            width: 200,
        }, {
            header: _('svideos_video_category'),
            dataIndex: 'category_name',
            sortable: false,
            width: 150,
        }, {
            header: _('svideos_video_code'),
            dataIndex: 'code',
            sortable: true,
            width: 150,
        }, {
            header: _('svideos_video_alias'),
            dataIndex: 'alias',
            sortable: true,
            width: 150,
        }, {
            header: _('svideos_video_createdby'),
            dataIndex: 'user',
            sortable: false,
            width: 150,
        }, {
            header: _('svideos_video_createdon'),
            dataIndex: 'createdon',
            sortable: true,
            width: 100,
        }, {
            header: _('svideos_video_editedon'),
            dataIndex: 'editedon',
            sortable: true,
            width: 100,
        }, {
            header: _('svideos_video_active'),
            dataIndex: 'active',
            renderer: sVideos.utils.renderBoolean,
            sortable: true,
            width: 100,
        }, {
            header: _('svideos_grid_actions'),
            dataIndex: 'actions',
            renderer: sVideos.utils.renderActions,
            sortable: false,
            width: 150,
            id: 'actions'
        }];
    },

    getTopBar: function () {
        return [{
            text: '<i class="icon icon-plus"></i>&nbsp;' + _('svideos_video_create'),
            handler: this.createVideo,
            scope: this
        }, '->', {
            xtype: 'svideos-field-search',
            width: 250,
            listeners: {
                search: {
                    fn: function (field) {
                        this._doSearch(field);
                    }, scope: this
                },
                clear: {
                    fn: function (field) {
                        field.setValue('');
                        this._clearSearch();
                    }, scope: this
                },
            }
        }];
    },

    onClick: function (e) {
        var elem = e.getTarget();
        if (elem.nodeName == 'BUTTON') {
            var row = this.getSelectionModel().getSelected();
            if (typeof(row) != 'undefined') {
                var action = elem.getAttribute('action');
                if (action == 'showMenu') {
                    var ri = this.getStore().find('id', row.id);
                    return this._showMenu(this, ri, e);
                }
                else if (typeof this[action] === 'function') {
                    this.menu.record = row.data;
                    return this[action](this, e);
                }
            }
        }
        return this.processEvent('click', e);
    },

    _getSelectedIds: function () {
        var ids = [];
        var selected = this.getSelectionModel().getSelections();

        for (var i in selected) {
            if (!selected.hasOwnProperty(i)) {
                continue;
            }
            ids.push(selected[i]['id']);
        }

        return ids;
    },

    _doSearch: function (tf) {
        this.getStore().baseParams.query = tf.getValue();
        this.getBottomToolbar().changePage(1);
    },

    _clearSearch: function () {
        this.getStore().baseParams.query = '';
        this.getBottomToolbar().changePage(1);
    },
});
Ext.reg('svideos-grid-videos', sVideos.grid.Videos);
