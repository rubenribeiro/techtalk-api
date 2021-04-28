const userDao = require("../daos/users-dao");

module.exports = (app) => {

    const register = (req, res) => {
        const credentials = req.body;
        console.log(JSON.stringify(credentials));
        userDao.findUserByUsername(credentials.username)
            .then((actualUser) => {
                if(actualUser && actualUser.length && actualUser.length > 0) {
                    console.log(JSON.stringify(actualUser));
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
                    req.session['profile'] = actualUser
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
                res.send(users);
            });
    };

    app.post("/api/users", findAllUsers);
    app.post('/api/users/register', register);
    app.post('/api/users/login', login);
    app.post("/api/users/logout", logout)
    app.post('/api/users/profile', profile);
}