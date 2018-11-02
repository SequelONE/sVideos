<?php

class sVideosCategoriesGetListProcessor extends modObjectGetListProcessor
{
    public $objectType = 'sVideosCategories';
    public $classKey = 'sVideosCategories';
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

		if ($query) {

			$c->where([
				'name:LIKE' => "%{$query}%",
				'OR:alias:LIKE' => "%{$query}%",
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
			'title' => $this->modx->lexicon('svideos_category_update'),
			//'multiple' => $this->modx->lexicon('svideos_categories_update'),
			'action' => 'updateCategory',
			'button' => true,
			'menu' => true,
		];

		if (!$array['active']) {
			$array['actions'][] = [
				'cls' => '',
				'icon' => 'icon icon-power-off action-green',
				'title' => $this->modx->lexicon('svideos_category_enable'),
				'multiple' => $this->modx->lexicon('svideos_categories_enable'),
				'action' => 'enableCategory',
				'button' => true,
				'menu' => true,
			];
		} else {
			$array['actions'][] = [
				'cls' => '',
				'icon' => 'icon icon-power-off action-gray',
				'title' => $this->modx->lexicon('svideos_category_disable'),
				'multiple' => $this->modx->lexicon('svideos_categories_disable'),
				'action' => 'disableCategory',
				'button' => true,
				'menu' => true,
			];
		}

		// Remove
		$array['actions'][] = [
			'cls' => '',
			'icon' => 'icon icon-trash-o action-red',
			'title' => $this->modx->lexicon('svideos_category_remove'),
			'multiple' => $this->modx->lexicon('svideos_categories_remove'),
			'action' => 'removeCategory',
			'button' => true,
			'menu' => true,
		];

		return $array;
    }

}

return 'sVideosCategoriesGetListProcessor';