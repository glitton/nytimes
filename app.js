// Angular JS File
var app = angular.module("myApp", []);

app.controller("firstCtrl", function($scope, $http){

  //search function that takes user input, feeds to API
  $scope.mySearch = function(search){
  //ny times api
    $http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q='
      + search +
      '&api-key=2da5e41c554f4ec29b8c5e74a82e042c').then(function(success){
      console.log(success.data.response.docs);
      //store array of objects in scope variable
      $scope.searchArr = success.data.response.docs;

    });
  }

});