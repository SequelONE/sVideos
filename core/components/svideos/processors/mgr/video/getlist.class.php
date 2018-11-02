<?php

class sVideosVideoGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'sVideosVideo';
    public $classKey = 'sVideosVideo';
    public $defaultSortField = 'id';
    public $defaultSortDirection = 'DESC';
    //public $permission = 'list';


    /**
     * We do a special check of permissions
     * because our objects is not an instances of modAccessibleObject
     *
     * @return boolean|string
     */
    public function beforeQuery()
    {
        if (!$this->checkPermissions()) {
            return $this->modx->lexicon('access_denied');
        }

        return true;
    }


    /**
     * @param xPDOQuery $c
     *
     * @return xPDOQuery
     */
    public function prepareQueryBeforeCount(xPDOQuery $c)
    {
        $query = trim($this->getProperty('query'));

		$c->leftJoin('sVideosCategories', 'sVideosCategories', 'sVideosCategories.id = sVideosVideo.category_id');
		$c->select(array($this->modx->getSelectColumns('sVideosVideo', 'sVideosVideo')));
		$c->select(array('sVideosCategories.name as category_name'));

		$c->leftJoin('modUser', 'modUser', 'modUser.id = sVideosVideo.createdby');
		$c->select(array($this->modx->getSelectColumns('sVideosVideo', 'sVideosVideo')));
		$c->select(array('modUser.username as user'));

        if ($query) {
            $c->where([
                'title:LIKE' => "%{$query}%",
				'OR:category_id:LIKE' => "%{$query}%",
				'OR:createdby:LIKE' => "%{$query}%"
            ]);
        }

        return $c;
    }


    /**
     * @param xPDOObject $object
     *
     * @return array
     */
    public function prepareRow(xPDOObject $object)
    {
        $array = $object->toArray();
        $array['actions'] = [];

        // Edit
        $array['actions'][] = [
            'cls' => '',
            'icon' => 'icon icon-edit',
            'title' => $this->modx->lexicon('svideos_video_update'),
            //'multiple' => $this->modx->lexicon('svideos_video_update'),
            'action' => 'updateVideo',
            'button' => true,
            'menu' => true,
        ];

        if (!$array['active']) {
            $array['actions'][] = [
                'cls' => '',
                'icon' => 'icon icon-power-off action-green',
                'title' => $this->modx->lexicon('svideos_video_enable'),
                'multiple' => $this->modx->lexicon('svideos_video_enable'),
                'action' => 'enableVideo',
                'button' => true,
                'menu' => true,
            ];
        } else {
            $array['actions'][] = [
                'cls' => '',
                'icon' => 'icon icon-power-off action-gray',
                'title' => $this->modx->lexicon('svideos_video_disable'),
                'multiple' => $this->modx->lexicon('svideos_video_disable'),
                'action' => 'disableVideo',
                'button' => true,
                'menu' => true,
            ];
        }

        // Remove
        $array['actions'][] = [
            'cls' => '',
            'icon' => 'icon icon-trash-o action-red',
            'title' => $this->modx->lexicon('svideos_video_remove'),
            'multiple' => $this->modx->lexicon('svideos_video_remove'),
            'action' => 'removeVideo',
            'button' => true,
            'menu' => true,
        ];

        return $array;
    }

}

return 'sVideosVideoGetListProcessor';