var app = angular.module('app', ['ui.router']);


app.config(function ($stateProvider, $urlRouterProvider) {

    console.log('inside the stateprovider');

    debugger;

    $urlRouterProvider.otherwise('/home')

    $stateProvider
        .state('manager', {
            url: "/manager",

            templateUrl: "views/manager.html",

            resolve: {
                typeEmployee: function ($q, $timeout) {
                    var deferred = $q.defer();
                    $timeout(function () {
                        deferred.resolve('manager');
                    }, 200);
                    return deferred.promise;
                },

                controller: function (typeEmployee) {
                    console.log('type of employee is:', typeEmployee);
                    if (typeEmployee === 'colleague') {
                        console.log('not allowed to view this');
                    }

                    if (typeEmployee === 'manager') {
                        console.log('allowed to view this');
                    }

                }
            }
        })

        .state('colleague', {
            url: "/colleague",

            templateUrl: "views/manager.html",

            resolve: {
                typeEmployee: function ($q, $timeout) {
                    var deferred = $q.defer();
                    $timeout(function () {
                        deferred.resolve('manager');
                    }, 200);
                    return deferred.promise;
                },

                controller: function (typeEmployee) {
                    console.log('type of employee is:', typeEmployee);
                    if (typeEmployee === 'colleague') {
                        console.log('not allowed to view this');
                    }

                    if (typeEmployee === 'manager') {
                        console.log('allowed to view this');
                    }

                }
            }
        })


        .state('home', {
            url: "/"
        })

});


