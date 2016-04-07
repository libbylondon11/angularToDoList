var app=angular.module('myTasks', []);//coresponds with the index myApp. Always like this.
app.controller('MainController', function($scope){

$scope.tasks=[];
$scope.task="";

$scope.addItem=function(something){
  console.log(something);
  console.log('Task is now', $scope.tasks);
  $scope.tasks.push(something);
}
})
