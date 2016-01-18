var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    console.log('inside the stateprovider');

    $urlRouterProvider.otherwise('/home')

    $stateProvider
        .state('manager', {
            url: "/manager",
            template: "manager view tbd",
            controller:managerCtrl,
            resolve: {
                msg: function() {
                    return 'resolve from manager';
                }
            }
        })

        .state('colleague', {

            url: "/colleague",

            templateUrl: "views/colleague.html",

            controller: colCtrl,

            resolve: {
                msg: function() {
                    return 'resolve from collegue';
                }
            }

        })

        .state('home', {
            url: "/"
        })

});


