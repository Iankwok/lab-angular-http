angular.module('TheCriminalsApp', [])
.controller('CriminalsController', ['$scope', '$http', function CriminalsController($scope , $http){

  $scope.all = [];
  $scope.newCriminal = {};
  $scope.addCriminal = addCriminal;
  $scope.deleteCriminal = deleteCriminal;

  getCriminals();

  function getCriminals(){
    $http
    .get('http://localhost:3000/criminals')
    .success(function(response){
      $scope.all = response.criminals;
    })
  }

  function addCriminal(){
    $http
    .post('http://localhost:3000/criminals', $scope.newCriminal)
    .success(function(data){
      getCriminals();
    });
    $scope.newCriminal = {};
  }

  function deleteCriminal(criminal){
    $http
    .delete("http://localhost:3000/criminals/" + criminal._id)
    .then(function(response){
      var index = $scope.all.indexOf(criminal);
      $scope.all.splice(index, 1);
    })
  }

  }]);