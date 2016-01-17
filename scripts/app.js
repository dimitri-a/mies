var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    console.log('inside the stateprovider');

    $urlRouterProvider.otherwise('/home')

    $stateProvider
        .state('manager', {
            url: "/manager",
            template: "manager view tbd",


        })

        .state('colleague', {
            url: "/colleague",
            template: "collegue view tbf",
            resolve: {
                typeEmployee: function ($q, $timeout) {
                    var deferred = $q.defer();
                    $timeout(function () {
                        deferred.resolve('emp');
                    }, 200);
                    return deferred.promise;
                },

                controller:colCtrl
            }
        })

        .state('home', {
            url: "/"
        })

});


