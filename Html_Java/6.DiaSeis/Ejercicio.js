let getUser = (id, callback) => {

    var db = [{
            id: 1,
            name: "anakin"
        },
        {
            id: 2,
            name: "obi"
        }
    ];

    var i;

    for (i = 0; i < db.length; i++) {
        if (db[i].id === id) return callback()
    }
    if (id === 20) {
        return callback("The user with id: ${id} does not exist.");
    } else {
        callback(null, user);
    }
}

getUser(1, (err, user) => {
    if (err) {
        return console.log(err);
    }
    console.log('This is the user number: ', user)
    console.log()
})