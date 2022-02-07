
var app = angular.module('myApp',[]);
app.controller('customersCtrl',function($scope, $http)
{
    $http.get("https://ayushree-2147141.github.io/JSON/records.json")
    .then(function(response)
    {
        $scope.myData = response.data.customers;
        $scope.rowlimit = response.data.length();
        // $scope.orderByMe = function(x) 
        // {
        //     $scope.myOrderBy = x;
        // }
    });

    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
      }

});

app.filter('myfilter',function()
{
    return function(input)
    {
        return "+91-" + input;
    }
});



