const resourceService = require("../services/resources/resources-service");

module.exports = (app) => {

    const createResource = (req, res) => {
        res.send("create Resource");
    }

    const findAllResources = (req, res) => {
        res.send("Return a list of resources");
    };

    const findResourceById = (req, res) => {
        res.send("Return Resource By ID");
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
        const bookId = req.params.id;
            resourceService.findBookById(bookId)
                .then ( book => {
                    res.send(book);
                });
    }

    app.post('/api/resources/', createResource);

    app.get('/api/resources', findAllResources);

    app.get('/api/resources/:id', findResourceById);

    app.put('/api/resources/:id', updateResource);

    app.delete('/api/resources/:id', deleteResource);

    app.get('/api/resources/search/:term', searchResources);

    app.get('/api/resources/search/detail/:id', searchResourceById)
}