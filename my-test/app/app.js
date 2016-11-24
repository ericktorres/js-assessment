var app = angular.module('my-test', []);

app.controller('arraysController', function(){
	var arrays = this;

	arrays.findPosition = function(item, arr){
		// Find the item in the given array
		var position = arr.indexOf(item);
		position = (position == -1) ? 'El elemento no se encuentra en el arreglo' : position;

		return position;
	}

	arrays.sumItems = function(arr){
		var sum = function(a, b){
			return a + b;
		}

		var result = arr.reduce(sum, 0);

		return result;
	}

	arrays.addItem = function(newItem, arr){
		arr.push(newItem);
		
		return arr;
	}
});

app.controller('asyncController', function($http, $scope){
	
	var webService = 'app/names.json'; // This file should be in a public server, for example, http://myserver.com/names.json or should come from an API like http://myserver.com/names/

	$http({
  		method: 'GET',
  		url: webService
	}).then(function successCallback(response) {

		$scope.arrData = response.data;
    				
  	}, function errorCallback(response) {
    	console.log('An error has ocurred while receiving data.');
  	});

});

app.controller('functionsController', function(){
	var functions = this;

	functions.getArray = function(arrNames){
		// This function receive an array as an argument and return the items
		var total = arrNames.length;
		if(total > 0){
			return arrNames;
		}else{
			return 'El argumento recibido no es un arreglo';
		}
		
	}
});

