function colCtrl($scope,msg) {

    console.log(msg);
    console.log('inside colctrl');

    $scope.items = [
        {'url': 'http://www.google.com', 'text': 'rrrrr ehggfeeeee fsfsdfsdfsd'},
        {'url': 'http://www.google.com', 'text': 'gggg WFP&O'},
        {'url': 'http://www.google.com', 'text': 'Requesrrdrt Flex for today'},
        {'url': 'http://www.google.com', 'text': 'My business units activities for today'},
        {'url': 'http://www.google.com', 'text': 'See my ssggs Wallboard'},
        {'url': 'http://www.google.com', 'text': 'ss my roster'}
    ];
}

app.controller('colCtrl', colCtrl);