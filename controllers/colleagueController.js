function colCtrl(typeEmployee) {

    console.log('inside colctrl');

    console.log('type of employee is:', typeEmployee);

    if (typeEmployee === 'colleague') {
        console.log('not allowed to view this');
    };

    if (typeEmployee === 'manager') {
        console.log('allowed to view this');
    };

    $scope.items =[
        {'url':'http://www.google.com','text':'Add new exception'},
        {'url':'http://www.google.com','text':'Amend my roster'}

    ];
}

app.controller('colCtrl', colCtrl);
