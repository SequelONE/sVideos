<?php

class sVideosVideoUpdateProcessor extends modObjectUpdateProcessor
{
    public $objectType = 'sVideosVideo';
    public $classKey = 'sVideosVideo';
    public $languageTopics = ['svideos'];
    //public $permission = 'save';


    /**
     * We doing special check of permission
     * because of our objects is not an instances of modAccessibleObject
     *
     * @return bool|string
     */
    public function beforeSave()
    {
        if (!$this->checkPermissions()) {
            return $this->modx->lexicon('access_denied');
        }

        return true;
    }


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $id = (int)$this->getProperty('id');
        $name = trim($this->getProperty('title'));
        if (empty($id)) {
            return $this->modx->lexicon('svideos_video_err_ns');
        }

        if (empty($name)) {
            $this->modx->error->addField('title', $this->modx->lexicon('svideos_video_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['title' => $name, 'id:!=' => $id])) {
            $this->modx->error->addField('title', $this->modx->lexicon('svideos_video_err_ae'));
        }

        return parent::beforeSet();
    }
}

return 'sVideosVideoUpdateProcessor';
