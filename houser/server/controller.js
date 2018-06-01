module.exports = {
    houses: (req, res, next)=> {
        const connection = req.app.get('db');
        connection.get_houses()
            .then( (houses)=> res.status(200).send(houses) )
            .catch( ()=> res.status(500).send() );


    },

    addHouse: (req, res, next)=> {
        console.log(req.body)
        const connection = req.app.get('db');
        const { name, address, city, state, zip } = req.body;
        connection.add_house([name, address, city, state, zip])
            .then( ()=> res.status(200).send() )
            .catch( (err)=> res.status(500).send() );
    },

    deleteHouse: (req, res, next)=> {
        const connection = req.app.get('db');
        connection.delete_house([req.params.id])
            .then( ()=> res.status(200).send() )
            .catch( ()=> res.status(500).send() );
    },
}