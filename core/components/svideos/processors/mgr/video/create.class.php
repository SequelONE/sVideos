<?php

class sVideosVideoCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'sVideosVideo';
    public $classKey = 'sVideosVideo';
    public $languageTopics = ['svideos'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('title'));
        if (empty($name)) {
            $this->modx->error->addField('title', $this->modx->lexicon('svideos_video_err_title'));
        } elseif ($this->modx->getCount($this->classKey, ['title' => $name])) {
            $this->modx->error->addField('title', $this->modx->lexicon('svideos_video_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'sVideosVideoCreateProcessor';