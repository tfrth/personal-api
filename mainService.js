var app = angular.module('personalApi');

app.service('mainService', function($http){

this.getName = function(){
	return $http({
		method: 'GET',
		url: 'http://localhost:8777/name'
	})

	// return $http.get('http://localhost:8777/name');
  }

 this.testRun = function() {
 	console.log("works");
 }

});





	












	// this.getName = function(){
 //        return $http.get("/name")
 //    };
 //    this.getLocation = function(){
 //        return $http.get("/location")
 //    };
 //    this.put = function(){
 //        return $http.get("/location")
 //    };
 //    this.get = function(){
 //        return $http.get("/hobbies")
 //    };
 //    this.get = function(){
 //        return $http.get("/occupations")
 //    };
 //    this.get = function(){
 //    	return $http.get("/occupations/latest")
 //    };
 //    this.get = function(){
 //        return $http.get("/references")
 //    };
 //    this.get = function(){
 //        return $http.get("/mentions")
 //    };
 //    this.post = function(){
 //        return $http.get("/mentions")
 //    };
 //    this.post = function(){
 //        return $http.get("/references")
 //    };
 //    this.get = function(){
 //        return $http.get("/skills")
 //    };
 //    this.post = function(){
 //    	return $http.get('/skills')
 //    };
