var app = angular.module('app',['ui.router']);


app.config(function($stateProvider,$urlRouterProvider){

    console.log('inside the stateprovider');

    debugger;

    $urlRouterProvider.otherwise('/home')

    $stateProvider
        .state('testing',{
            url:"/testing",
            template:'<p>this is testing</p>'
        })

        .state('manager',{
            url:"/manager",
            templateUrl:'views/manager.html'
        })

        .state('home',{
            url:"/"
        })

});

app.run(function(){
    console.log('inside run');
});


