module.exports = {

    create: (req, res) => {
        const {name, description, price, image_url} = req.body
        const dbInstance = req.app.get ('db')
        dbInstance.create_product (name, description, price, image_url)
        .then (() => res.sendStatus(200))
        .catch (error => res.status(500).send({errorMessage: 'Unable to create product.'}),
        console.log(error)
        )
    },

    getOne: (req, res) => {
        const {product_id} = req.body
        const dbInstance = req.app.get ('db')
        dbInstance.read_product (product_id)
        .then (product => res.status(200).send(product))
        .catch (error => res.status(500).send({errorMessage: 'Unable to locate product.'})),
        console.log (error)
    },

    getAll: (req, res) => {
        const dbInstance = req.app.get ('db')
        dbInstance.read_products ('db')
        .then (products => res.status(200).send(products))
        .catch (error => res.status(500).send({errorMessage: 'Products not found.'}))
        console.log (error)
    },

    update: (req, res) => {
        const {id} = req.body
        const {description} = req.params
        const dbInstance = req.app.get ('db')
        dbInstance.update_product (id, description)
        .then (() => res.sendStatus(200))
        .catch (error => res.status(500).send({errorMessage: 'Cannot update product.'}))
        console.log (error)
    },

    delete: (req, res) => {
        const {id} = req.params
        const dbInstance = req.app.get ('db')
        dbInstance.delete_product (id)
        .then (() => res.sendStatus(200))
        .catch (errpr => res.status(500).send({errorMessage: 'Could not delete product.'}))
        console.log (error)
    }
}