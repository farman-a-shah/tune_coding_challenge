<?php

class Router {
	
	private $requestUri;
	
	function __construct($requestUri) {
		$this->requestUri = $requestUri;
	}
	
	/**
	  With the current setting of .htaccess, the $requestUri will be something like:
	  TuneCodingChallenge/solution/server/v1/user/users/index.php
	  
	  Getting "user" as controller and "users" as action from it
	*/
	public function getRoute() {
		$route = explode("/", $this->requestUri);
		$len = count($route);
		return array(
			"action"=>$route[$len - 2],
			"controller"=>ucwords($route[$len - 3])
		);
	}
	
}

?>