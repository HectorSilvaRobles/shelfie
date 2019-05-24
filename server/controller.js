module.exports = {
    get_product: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance
        .get.inventory()
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send('oops couldn')
        })
    },
    add_product: (req, res) => {
        console.log('add product')
        const dbInstance = req.app.get('db')
        console.log('this is req.body', req.body)
        const {name, price, img_url } = req.body

        dbInstance
        .post.create_product([name, price, img_url])
        .then(()=> res.sendStatus(200))
        .catch(err => {
            res.status(500).send('there was a problem creating product')
        })
        
    },

    deleteProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const {name} = req.params
        console.log('hit')
        console.log(name)

        dbInstance
        .delete.delete_product(name)
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send('error trying to delete product')
        })
    }
}