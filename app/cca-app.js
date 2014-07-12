var ccaModule = angular.module('ccaApp',['ccaLibrary','ngRoute','ngAnimate']);
ccaModule.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function() {
        $location.path("/error");
    });
    $rootScope.$on('$routeChangeStart', function() {
        $rootScope.isLoading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function() {
      // $timeout(function() {
        $rootScope.isLoading = false;
      // }, 1000);
    });
});