const resourceService = require("../services/resources/resources-service");

module.exports = (app) => {
    const createResource = (req, res) => {
        const resource = req.body;
        console.log(JSON.stringify(resource));
        resourceService.createResource(resource)
            .then((actualResource) => {
                res.send(actualResource);
            })
    }

    const findAllResources = (req, res) => {
        res.send("Return a list of resources");
    };

    const findResourceById = (req, res) => {
        const rid = req.body;
        resourceService.findResourceById(credentials)
            .then((actualUser) => {
                if(actualUser) {
                    req.session['profile'] = actualUser
                    res.send(actualUser)
                } else {
                    res.send("0")
                }
            })
    };

    const updateResource = (req, res) => {
        res.send("Update Resource");
    }

    const deleteResource = (req, res) => {
        res.send("Delete Resource");
    }

    const searchResources = (req, res) => {
        const searchTerm = req.params.term;

        resourceService.findBooksBySearchTerm(searchTerm)
            .then ( books => {
                res.send(books);
        });
    }

    const searchResourceById = (req, res) => {
        const resourceId = req.params['id'];
            resourceService.findResourceById(resourceId)
                .then( resource => {
                    res.send(resource);
                })
    }

    const findBookById = (req, res) => {
        const bookId = req.params['id'];
        resourceService.findBookById(bookId)
            .then( book => {
                res.send(book);
            })
    }

    const resourceUpVote = (req, res) => {
        res.send("Up Vote Resource");
    }
    const resourceDownVote = (req, res) => {
        res.send("Down Vote Resource");
    }

    app.post('/api/resources', createResource);
    app.get('/api/resources', findAllResources);
    app.get('/api/resources/:id', findResourceById);
    app.put('/api/resources/:id', updateResource);
    app.delete('/api/resources/:id', deleteResource);
    app.get('/api/resources/search/:term', searchResources);
    app.get('/api/resources/search/detail/:id', findBookById);
    app.post('/api/resources/:id/upvote', resourceUpVote);
    app.post('/api/resources/:id/downvote', resourceDownVote);
}