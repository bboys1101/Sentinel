'use strict';
var app = angular.module('myApp', ['myApp.directives']);

// controller
app.controller('FormController', function($scope, $http) {
    $scope.user = {};
    

    $scope.submit = function() {
        var theUser = $scope.user;
        console.log(theUser);
        $("#SendBtn").text("Sending, please waiting");
        $("#SendBtn").attr("disabled", "disabled");

        // ajax post
        $http.post(
                "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth",
                theUser
        ).then(
            function(response) {
                $scope.data = response.data;
                console.log(response.data);
                btnBackSuc();
                allDone();
            },
            function(err) {
                btnBack();
                $('form').append('<p class="error">Ooops, something wrong!!</p>')
            }
        )
    }
});
