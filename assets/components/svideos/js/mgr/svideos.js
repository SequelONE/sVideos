var sVideos = function (config) {
    config = config || {};
    sVideos.superclass.constructor.call(this, config);
};
Ext.extend(sVideos, Ext.Component, {
    page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('svideos', sVideos);

sVideos = new sVideos();