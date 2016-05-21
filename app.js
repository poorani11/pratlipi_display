// MODULE
var bookApp = angular.module('bookApp', ['ngRoute', 'ngResource']);

// ROUTES
bookApp.config(function ($routeProvider){

    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/book/', {
        templateUrl: 'pages/book.html',
        controller: 'bookController'
    })
});

// SERVICES
bookApp.service('idService', function(){

    this.id = "563025347084288";

});

bookApp.factory('JsonService', function($resource) {
  return $resource('books/home.json',{ }, {
    getData: {method:'GET', isArray: false}
  });
});

bookApp.factory('apiService', function($resource) {
  return $resource('books/review_list.json',{ }, {
    getData: {method:'GET', isArray: false}
  });
});



// CONTROLLERS
bookApp.controller('homeController', ['$scope','JsonService','idService', function($scope,JsonService,idService){
     JsonService.get(function(data){
        console.log(data);
    $scope.id = data.pratilipiId;
  });
    $scope.$watch('id', function(){
        idService.id = $scope.id;

    });
   
}]);

bookApp.controller('bookController', ['$scope','$resource','idService','JsonService','apiService', function($scope,$resource,idService,JsonService,apiService){
    JsonService.get(function(data){
        $scope.book=data;

    $scope.id = data.pratilipiId;
  });
    apiService.query(function(data){
    $scope.bookReview = data;
    console.log(data);
  });


}]);