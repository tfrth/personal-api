var app = angular.module('personalApi');

app.controller('homeCtrl', function($scope, mainService) {
	
	$scope.name = mainService.getName();
	$scope.test = mainService.testRun();
});




