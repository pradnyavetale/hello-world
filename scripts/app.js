var myapp = angular.module("myapp", ["ngRoute"]);
myapp.controller("loginController", ["$scope", "$location", "$anchorScroll", "$window", function($scope, $location , $anchorScroll, $window){
	$scope.helloToTitle = "Login";
	var uname_pwd_list = [
		{uname :'admin', pwd:'admin123'}
		];
	$scope.uname = '';
	$scope.pwd = '';
	$scope.login = function(){
		console.log($scope.uname+' uname');
		if(($scope.uname == uname_pwd_list[0]['uname']) && ($scope.pwd == uname_pwd_list[0]['pwd'])){
			console.log(uname_pwd_list[0]['uname']+' -- '+$scope.uname);
			document.getElementById("uname_val").innerHTML = $scope.uname;
			$scope.helloToTitle = 'Welcome '+$scope.uname;
		}

	}
	$scope.home = function(){
		console.log($window.innerHeight+' height');
		$location.hash('bottom');
		$anchorScroll();
		
	}
	$scope.top_anchor = function(){
		$location.hash('top');
		$anchorScroll();
		
	}
	
}]);
myapp.run(["$anchorScroll", function($anchorScroll){
	console.log('run');
	$anchorScroll.yOffset = 50;
}]);
myapp.controller("checkVertical",[ "$anchorScroll", "$location", "$scope",
function($anchorScroll, $location, $scope){
	$scope.goToanchor = function(x){
		var newHash = 'anchor'+x;
		if($location.hash() !== newHash){
			$location.hash('anchor'+x);
		}else{
			$anchorScroll();
		}
	}
}
]);



