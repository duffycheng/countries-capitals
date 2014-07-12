ccaModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/:code/:country/capital", {
    templateUrl : "./capital/capital.html",
    controller: "capitalController",
    resolve : {
      country : ['ccaCountry', '$route', function(ccaCountry, $route) {
        return ccaCountry($route.current.params.code, $route.current.params.country);
      }],
      capital : ['ccaCapital', '$route', function(ccaCapital, $route) {
        return ccaCapital($route.current.params.code, $route.current.params.country);
      }],
      neighbors : ['ccaNeighbor', '$route', function(ccaNeighbor, $route) {
        return ccaNeighbor($route.current.params.code);
      }]
    }
  });
}])
.controller('capitalController', ['$scope','capital','neighbors','country', function($scope,capital,neighbors,country){
	    $scope.capital = capital;
	    $scope.country = country;
	    $scope.neighbors = neighbors;
}]);