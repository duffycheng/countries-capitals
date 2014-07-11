angular.module('ccaLibrary',[])
.constant('CCA_COUNTRY_INFO', 'http://api.geonames.org/countryInfo?username=peicheng&type=json')
.factory('ccaCountries', ['$http','$q','CCA_COUNTRY_INFO', function($http,$q,CCA_COUNTRY_INFO){
	return function (){
		var defer = $q.defer();
		$http.get(CCA_COUNTRY_INFO,{cache:true})
		.success(function(countries){
			defer.resolve(countries);
		});
		return defer.promise;
	};
}])