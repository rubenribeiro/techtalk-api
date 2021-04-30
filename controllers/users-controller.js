const userDao = require("../daos/users-dao");

module.exports = (app) => {

    const register = (req, res) => {
        const credentials = req.body;
        userDao.findUserByUsername(credentials.username)
            .then((actualUser) => {
                if(actualUser && actualUser.length && actualUser.length > 0) {
                    res.send("0");
                } else {
                    userDao.createUser(credentials)
                        .then((newUser) => {
                            req.session['profile'] = newUser;
                            res.send(newUser);
                        })
                }
            })

    }
    const login = (req, res) => {
        const credentials = req.body;
        userDao.findUserByCredentials(credentials)
            .then((actualUser) => {
                if(actualUser) {
                    req.session['profile'] = actualUser;
                    res.send(actualUser)
                } else {
                    res.send("0")
                }
            })
    }

    const logout = (req, res) => {
        if (req.session) {
            req.session.destroy(err => {
                if (err) {
                    res.status(400).send('An error as occurred. Unable to log out user!')
                } else {
                    res.send('Logout successful!');
                }
            });
        } else {
            res.end();
        }
    }

    const profile = (req, res) => {
        const currentUser = req.session['profile'];
        res.send(currentUser);

    }

    const findAllUsers = (req, res) => {
        userDao.findAllUsers()
            .then((users) => {
                console.log(users);
                res.send(users);
            });
    };

    const findUserById = (req, res) => {
        const userId = req.params["id"];
        userDao.findUserById(userId)
            .then((user) => {
                res.send(user);
            });
    };

    const updateUser = (req, res) => {
        const userToUpdate = req.body;
        userDao.updateUser(userToUpdate)
            .then((user) => {
                req.session['profile'] = user;
                res.send(user);
            })
    }

    const updateUserById = (req, res) => {
        const userToUpdate = req.body;
        userDao.updateUser(userToUpdate)
            .then((user) => {
                res.send(user);
            })
    }

    const deleteUser = (req, res) => {
        const userId = req.params['id'];
        userDao.deleteUser(userId)
            .then((user) => {
                res.send(user);
            })
    }

    const addUser = (req, res) => {
        const credentials = req.body;
        userDao.findUserByUsername(credentials.username)
            .then((actualUser) => {
                if(actualUser && actualUser.length && actualUser.length > 0) {
                    res.send("0");
                } else {
                    userDao.createUser(credentials)
                        .then((newUser) => {
                            res.send(newUser);
                        })
                }
            })
    }

    app.post("/api/users", findAllUsers);
    app.post('/api/users/register', register);
    app.post('/api/users/login', login);
    app.post("/api/users/logout", logout)
    app.post('/api/users/profile', profile);
    app.post('/api/users/profile/new', addUser);
    app.put('/api/users/profile', updateUser);
    app.delete('/api/users/profile/:id', deleteUser);
    app.post('/api/users/profile/:id', findUserById);
    app.put('/api/users/profile/:id', updateUserById);
}