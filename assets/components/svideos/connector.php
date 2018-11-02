<?php
if (file_exists(dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php')) {
    /** @noinspection PhpIncludeInspection */
    require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php';
} else {
    require_once dirname(dirname(dirname(dirname(dirname(__FILE__))))) . '/config.core.php';
}
/** @noinspection PhpIncludeInspection */
require_once MODX_CORE_PATH . 'config/' . MODX_CONFIG_KEY . '.inc.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CONNECTORS_PATH . 'index.php';
/** @var sVideos $sVideos */
$sVideos = $modx->getService('sVideos', 'sVideos', MODX_CORE_PATH . 'components/svideos/model/');
$modx->lexicon->load('svideos:default');

// handle request
$corePath = $modx->getOption('svideos_core_path', null, $modx->getOption('core_path') . 'components/svideos/');
$path = $modx->getOption('processorsPath', $sVideos->config, $corePath . 'processors/');
$modx->getRequest();

/** @var modConnectorRequest $request */
$request = $modx->request;
$request->handleRequest([
    'processors_path' => $path,
    'location' => '',
]);