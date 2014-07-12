ccaModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/countries", {
    templateUrl : "./countries/countries.html",
    controller : 'CountryController'
  });
}]);

ccaModule.controller('CountryController', ['ccaCountries','$scope','$location','$rootScope', function(ccaCountries,$scope,$location,$rootScope){
	 $rootScope.isLoading = true;
	 //country data
	 ccaCountries().then(function(countries) {
	    $scope.countries = countries;
	    $rootScope.isLoading = false;
	  });

	 //go to detail page
	 $scope.goToCapital = function(contryCode,countryName){
	 	var path = '/'+contryCode+"/"+countryName+'/capital';
	 	$location.path(path);
	 };
}]);