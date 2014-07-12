angular.module('ccaLibrary',[])
.constant('CCA_COUNTRIES_INFO', 'http://api.geonames.org/countryInfoJSON?username=peicheng')
.constant('CCA_COUNTRY_INFO', 'http://api.geonames.org/countryInfoJSON?username=peicheng&name_equals={{name}}&country={{code}}')
.constant('CCA_CAPITAL_INFO', 'http://api.geonames.org/searchJSON?username=peicheng&country={{code}}&q=capital')
.constant('CCA_NEIGHBOR_INFO', 'http://api.geonames.org/neighboursJSON?username=peicheng&country={{code}}')
.factory('ccaRequest', ['$http','$q','CCA_COUNTRY_INFO', function($http,$q,CCA_COUNTRY_INFO){
	return function (path){
		var defer = $q.defer();
		$http.get(path,{cache:true})
		.success(function(data){
			defer.resolve(data);
		});
		return defer.promise;
	};
}])
.factory('ccaCountries', ['CCA_COUNTRIES_INFO','ccaRequest', function(CCA_COUNTRIES_INFO,ccaRequest){
	return function (){
		return ccaRequest(CCA_COUNTRIES_INFO);
	};
	
}])
.factory('ccaCountry', ['CCA_COUNTRY_INFO','ccaRequest','$interpolate', function(CCA_COUNTRY_INFO,ccaRequest,$interpolate){
	return function (code, name){
		 var country_path = $interpolate(CCA_COUNTRY_INFO)({
		          code : code,
		          name : name
		    });
		return ccaRequest(country_path);
	};
	
}])
.factory('ccaCapital', ['CCA_CAPITAL_INFO','ccaRequest','$interpolate', function(CCA_CAPITAL_INFO,ccaRequest,$interpolate ){
	return function (code, name){
		 var country_path = $interpolate(CCA_CAPITAL_INFO)({
		          code : code,
		          name : name
		    });
		return ccaRequest(country_path);
	};
}])
.factory('ccaNeighbor', ['CCA_NEIGHBOR_INFO','ccaRequest','$interpolate', function(CCA_NEIGHBOR_INFO,ccaRequest,$interpolate ){
	return function (code){
		 var country_path = $interpolate(CCA_NEIGHBOR_INFO)({
		          code : code
		        });
		return ccaRequest(country_path);
	};
}]);