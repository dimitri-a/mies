function colCtrl($scope,msg) {

    console.log(msg);
    console.log('inside colctrl');

    $scope.items = [
        {'url': 'http://www.google.com', 'text': 'Add new exception'},
        {'url': 'http://www.google.com', 'text': 'Contact WFP&O'},
        {'url': 'http://www.google.com', 'text': 'Request Flex for today'},
        {'url': 'http://www.google.com', 'text': 'My business units activities for today'},
        {'url': 'http://www.google.com', 'text': 'See my business Wallboard'},
        {'url': 'http://www.google.com', 'text': 'Amend my roster'}
    ];
}

app.controller('colCtrl', colCtrl);