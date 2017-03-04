angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  
  $scope.addLink = function(link){
    console.log("the pluggg")
    Links.addOne(link);
    $scope.url = '';
  };


});
