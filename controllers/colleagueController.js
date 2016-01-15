
function colCtrl(typeEmployee) {
    console.log('inside colctrl');
    console.log('type of employee is:', typeEmployee);
    if (typeEmployee === 'colleague') {
        console.log('not allowed to view this');
    }

    if (typeEmployee === 'manager') {
        console.log('allowed to view this');
    }
}

app.controller('colCtrl', colCtrl);
