<?php
$path = MODX_CORE_PATH. 'components/pdotools/model/pdotools/';
$pdoFetch = $modx->getService('pdofetch','pdoFetch', $path, $scriptProperties);
$pdoFetch->setConfig($scriptProperties);
return $pdoFetch->run();