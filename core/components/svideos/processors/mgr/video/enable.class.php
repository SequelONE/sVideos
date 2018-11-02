<?php

class sVideosVideoEnableProcessor extends modObjectProcessor
{
    public $objectType = 'sVideosVideo';
    public $classKey = 'sVideosVideo';
    public $languageTopics = ['svideos'];
    //public $permission = 'save';


    /**
     * @return array|string
     */
    public function process()
    {
        if (!$this->checkPermissions()) {
            return $this->failure($this->modx->lexicon('access_denied'));
        }

        $ids = $this->modx->fromJSON($this->getProperty('ids'));
        if (empty($ids)) {
            return $this->failure($this->modx->lexicon('svideos_video_err_ns'));
        }

        foreach ($ids as $id) {
            /** @var sVideos $object */
            if (!$object = $this->modx->getObject($this->classKey, $id)) {
                return $this->failure($this->modx->lexicon('svideos_video_err_nf'));
            }

            $object->set('active', true);
            $object->save();
        }

        return $this->success();
    }

}

return 'sVideosVideoEnableProcessor';
