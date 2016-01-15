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

                controller:'colCtrl'
            }
        })

        .state('colleague', {
            url: "/colleague",

            templateUrl: "views/colleague.html",

            resolve: {
                typeEmployee: function ($q, $timeout) {
                    var deferred = $q.defer();
                    $timeout(function () {
                        deferred.resolve('manager');
                    }, 200);
                    console.log('called typeemployee');
                    return deferred.promise;
                }
                ,
                controller:  colCtrl
            }
        })


        .state('home', {
            url: "/"
        })

});


