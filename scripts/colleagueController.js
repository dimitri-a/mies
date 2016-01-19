function colCtrl($scope,msg) {

    console.log(msg);
    console.log('inside colctrl');

    $scope.items = [
        {'url': 'http://www.google.com', 'text': 'Add new fsfsdfsdfsd'},
        {'url': 'http://www.google.com', 'text': 'gggg WFP&O'},
        {'url': 'http://www.google.com', 'text': 'Requesrrdrt Flex for today'},
        {'url': 'http://www.google.com', 'text': 'My business units activities for today'},
        {'url': 'http://www.google.com', 'text': 'See my sss Wallboard'},
        {'url': 'http://www.google.com', 'text': 'Amend my roster'}
    ];
}

app.controller('colCtrl', colCtrl);