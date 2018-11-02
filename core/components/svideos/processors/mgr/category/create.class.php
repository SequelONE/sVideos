<?php

class sVideosCategoriesCreateProcessor extends modObjectCreateProcessor
{
    public $objectType = 'sVideosCategories';
    public $classKey = 'sVideosCategories';
    public $languageTopics = ['svideos'];
    //public $permission = 'create';


    /**
     * @return bool
     */
    public function beforeSet()
    {
        $name = trim($this->getProperty('name'));
        if (empty($name)) {
            $this->modx->error->addField('name', $this->modx->lexicon('svideos_category_err_name'));
        } elseif ($this->modx->getCount($this->classKey, ['name' => $name])) {
            $this->modx->error->addField('name', $this->modx->lexicon('svideos_category_err_ae'));
        }

        return parent::beforeSet();
    }

}

return 'sVideosCategoriesCreateProcessor';