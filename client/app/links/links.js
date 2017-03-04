angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {};
  Links.getAll().then(function(response){ $scope.data.links = response});
});


// .controller('AuthController', function ($scope, $window, $location, Auth) {
//   $scope.user = {};

//   $scope.signin = function () {
//     Auth.signin($scope.user)
//       .then(function (token) {
//         $window.localStorage.setItem('com.shortly', token);
//         $location.path('/links');
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//   };

//   $scope.signup = function () {
//     Auth.signup($scope.user)
//       .then(function (token) {
//         $window.localStorage.setItem('com.shortly', token);
//         $location.path('/links');
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//   };
// });