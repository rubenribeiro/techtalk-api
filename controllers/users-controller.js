const userDao = require("../daos/users-dao");


module.exports = (app) => {

    const register = (req, res) => {
        const credentials = req.body;
        userDao.findUserByUsername(credentials.email)
            .then((actualUser) => {
                if(actualUser.length > 0) {
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
        userDao.findUserByCredentials(credentials.email)
            .then((actualUser) => {
                if(actualUser) {
                    userDao.createUser(credentials)
                        .then((actualUser) => {
                            req.session['profile'] = actualUser;
                            res.send(actualUser);
                        })
                } else {
                     res.send("0");
                }
            })
    }

    const logout = (req, res) => {
    }
    const profile = (req, res) => {
        const currentUser = req.session['profile'];
        res.send(currentUser);
    }

    app.post('/api/users/register', register);
    app.post('/api/users/login', login);
    app.post("/api/users/logout", logout)
    app.post('/api/users/profile', profile);
}