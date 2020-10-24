<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
include("routes/Router.php");

// Grab the request
$requestMethod = $_SERVER["REQUEST_METHOD"];
$requestUri = $_SERVER['REQUEST_URI'];

// Sort out the requested route
$router = new Router($requestUri);
$route = $router->getRoute();

// Include the controller
$controllerName = $route["controller"] . "Controller";
$action = $route["action"];
include("controllers/$controllerName.php");

// Initiate and Perform the action
$controller = new $controllerName();
$data = $controller->$action();

// Output data
header('Content-type:application/json;charset=utf-8');
echo $data;

?>