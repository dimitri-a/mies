var app = angular.module('app',['ui.router']);


app.config(function($stateProvider,$urlRouterProvider){

    console.log('inside the stateprovider');

    debugger;

    //$urlRouterProvider.otherwise('/home')

    $stateProvider
        .state('testing',{
            url:"/testing",
            template:'<p>this is testing</p>'
        })

        .state('manager',{
            url:"/manager",
            template:'<p>this is the manager</p>'
        })

        .state('home',{
            url:"/"
        })

});

app.run(function(){
    console.log('inside run');
});


