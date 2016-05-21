// MODULE
var bookApp = angular.module('bookApp', ['ngRoute', 'ngResource']);

// ROUTES
bookApp.config(function ($routeProvider){

    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/book', {
        templateUrl: 'pages/book.html',
        controller: 'bookController'
    })
});

// SERVICES
bookApp.service('idService', function(){

    this.id = "5630253470842880";

});
// bookApp.service('ApiService', ['$resource', '$q', function($resource, $q){
//     var vm = this;
 
//     vm.getApi = function(_id) {

//         return $q(function(resolve, reject) {

//             var resObj = $resource("https://api.fyle.in/api/bank_branches");
//             var resp = resObj.query({city:_city,offset: 0,limit:50});
//             resp.$promise.then(function(data){
//                    console.log('Got data');
//                    vm.data = data;
//                    console.log(data);
//                    resolve('success')
//                  },function(err){
//                     console.log(err);
//                     console.log('error');
//                     reject('error')
//             });
//         })
//     // console.log($scope.bankResult);

//     }
//     vm.getBankData = function(){
//         return vm.data;
//     }
// }]);


// CONTROLLERS
bookApp.controller('homeController', ['$scope','idService', function($scope,idService){
    $scope.id = idService.city;
    $scope.$watch('id', function(){
        idService.id = $scope.id;

    });
   
}]);

bookApp.controller('bookController', ['$scope','$resource','idService', function($scope,$resource,idService){
    $scope.id = idService.id;
   // ApiService.getApi($scope.id)
   //  .then(function(result) {
   //      $scope.bankData = ApiService.getBankData();
        
   //  })

}]);