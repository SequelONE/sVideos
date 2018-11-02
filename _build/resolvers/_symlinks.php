<?php
/** @var xPDOTransport $transport */
/** @var array $options */
/** @var modX $modx */
if ($transport->xpdo) {
    $modx =& $transport->xpdo;

    $dev = MODX_BASE_PATH . 'Extras/sVideos/';
    /** @var xPDOCacheManager $cache */
    $cache = $modx->getCacheManager();
    if (file_exists($dev) && $cache) {
        if (!is_link($dev . 'assets/components/svideos')) {
            $cache->deleteTree(
                $dev . 'assets/components/svideos/',
                ['deleteTop' => true, 'skipDirs' => false, 'extensions' => []]
            );
            symlink(MODX_ASSETS_PATH . 'components/svideos/', $dev . 'assets/components/svideos');
        }
        if (!is_link($dev . 'core/components/svideos')) {
            $cache->deleteTree(
                $dev . 'core/components/svideos/',
                ['deleteTop' => true, 'skipDirs' => false, 'extensions' => []]
            );
            symlink(MODX_CORE_PATH . 'components/svideos/', $dev . 'core/components/svideos');
        }
    }
}

return true;