var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    console.log('inside the stateprovider');

    $urlRouterProvider.otherwise('/colleague')

    $stateProvider
        .state('manager', {
            url: "/manager",
            templateUrl: "views/colleague.html",
            controller: managerCtrl,
            resolve: {
                msg: function () {
                    return 'resolve frofffddm manager';
                }
            }
        })

        .state('colleague', {
            url: "/colleague",
            templateUrl: "views/colleague.html",
            controller: colCtrl,
            resolve: {
                msg: function () {
                    return 'resolve from collegue';
                }
            }
        })

        .state('home', {
            url: "/"
        })

});


