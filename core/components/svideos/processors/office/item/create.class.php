<?php

class sVideosOfficeItemCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'sVideosItem';
    public $classKey = 'sVideosItem';
    public $languageTopics = ['svideos'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('svideos_item_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['name' => $name])) {
            $this->modx->error->addField('name', $this->modx->lexicon('svideos_item_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'sVideosOfficeItemCreateProcessor';