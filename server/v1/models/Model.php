<?php
include_once("base/ModelAbstract.php");
include("document/DocumentModel.php");
include("rdbms/RDBMSModel.php");
include("/../config/Config.php");

class Model {
	
	public static function getModel() {
		if(Config::$useDb)
			return new RDBMSModel();
		else
			return new DocumentModel();
	}
}

?>