ccaModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/countries", {
    templateUrl : "./countries/countries.html",
    controller : 'CountryController'
  });
}]);

ccaModule.controller('CountryController', ['ccaCountries','$scope', function(ccaCountries,$scope){
	 ccaCountries().then(function(countries) {
    $scope.countries = countries;
  });
}])