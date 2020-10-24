<?php
include("/../models/Model.php");

class UserController {
	
	public function users(){
		$model = Model::getModel();
		return $model->getUsers();
	}
	
}

?>