<?php
include_once("/../base/ModelAbstract.php");

class DocumentModel extends ModelAbstract {
	
	public function getUsers() {
		$users = json_decode(file_get_contents("users.json", true), true);
		$logs = json_decode(file_get_contents("logs.json", true), true);
		$result = array();
		
		foreach($users as $user) {
			$result[$user['id']]['user'] = $user;
			$result[$user['id']]['impressions'] = 0;
			$result[$user['id']]['conversions'] = 0;
			$result[$user['id']]['revenue'] = 0;
			$result[$user['id']]['conversionGraph'] = array();
		}
		
		foreach($logs as $log) {
			$result[$log['user_id']]['revenue'] += $log['revenue'];
			$dt = new DateTime($log['time']);
			$date = $dt->format('Y-m-d');
			if($log["type"] === "conversion"){
				$result[$log['user_id']]['conversions'] += 1;
				if(!isset($result[$log['user_id']]['conversionGraph'][$date])){
					$result[$log['user_id']]['conversionGraph'][$date] = 0;
				}
				$result[$log['user_id']]['conversionGraph'][$date] += 1;
			} else {
				$result[$log['user_id']]['impressions'] += 1;
			}
		}
		
		return json_encode($result);
	}
}

?>