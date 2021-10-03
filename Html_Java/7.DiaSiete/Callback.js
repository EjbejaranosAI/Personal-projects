var db = [{
    id: 1,
    name: "anakin"
}, {
    id: 2,
    name: "obi"
}];

var aspects = [{
        id: 1,
        faction: "sith",
        forceSide: "dark"
    },
    {
        id: 2,
        faction: "jedi",
        forceSide: "light"
    }
];

var getUser = id => {
    var result = db.find(user => user.id === id);

    return new Promise((resolve, reject) => {
        if (id === 20) {
            reject('The user with id: ${id} does not exist.');

        } else {
            resolve(result);
        }
    })
};

let getFaction = user => {
    var result = aspects.find(aspect => aspect.id === user.id);

    return new promise((resolve, reject) => {
        if (!result)
            reject('Uknown force user')
        else
            resolve({...user, ...result })
    })
}

getUser(1)
    .then(user => getFaction(user))
    .then(forceUser => console.log(forceUser))
    .catch(err => console.log(err));