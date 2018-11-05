<?php

/**
 * The home manager controller for sVideos.
 *
 */
class sVideosHomeManagerController extends modExtraManagerController
{
    /** @var sVideos $sVideos */
    public $sVideos;


    /**
     *
     */
    public function initialize()
    {
        $this->sVideos = $this->modx->getService('sVideos', 'sVideos', MODX_CORE_PATH . 'components/svideos/model/');
        parent::initialize();
    }


    /**
     * @return array
     */
    public function getLanguageTopics()
    {
        return ['svideos:default'];
    }


    /**
     * @return bool
     */
    public function checkPermissions()
    {
        return true;
    }


    /**
     * @return null|string
     */
    public function getPageTitle()
    {
        return $this->modx->lexicon('svideos');
    }

    /**
     * @return void
     */
    public function loadCustomCssJs()
    {
        $this->addCss($this->sVideos->config['cssUrl'] . 'mgr/main.css');
        $this->addJavascript($this->sVideos->config['jsUrl'] . 'mgr/svideos.js');
        $this->addJavascript($this->sVideos->config['jsUrl'] . 'mgr/misc/utils.js');
        $this->addJavascript($this->sVideos->config['jsUrl'] . 'mgr/misc/combo.js');
        $this->addJavascript($this->sVideos->config['jsUrl'] . 'mgr/widgets/categories.grid.js');
        $this->addJavascript($this->sVideos->config['jsUrl'] . 'mgr/widgets/categories.windows.js');
		$this->addJavascript($this->sVideos->config['jsUrl'] . 'mgr/widgets/videos.grid.js');
		$this->addJavascript($this->sVideos->config['jsUrl'] . 'mgr/widgets/videos.windows.js');
        $this->addJavascript($this->sVideos->config['jsUrl'] . 'mgr/widgets/home.panel.js');
        $this->addJavascript($this->sVideos->config['jsUrl'] . 'mgr/sections/home.js');

        $this->addHtml('<script type="text/javascript">
        sVideos.config = ' . json_encode($this->sVideos->config) . ';
        sVideos.config.connector_url = "' . $this->sVideos->config['connectorUrl'] . '";
        Ext.onReady(function() {
            MODx.load({ xtype: "svideos-page-home"});
        });
        </script>');
    }


    /**
     * @return string
     */
    public function getTemplateFile()
    {
        $this->content .= '<div id="svideos-panel-home-div"></div>';

        return '';
    }
}