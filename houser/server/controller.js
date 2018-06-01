module.exports = {
    houses: (req, res, next)=> {
        const connection = req.app.get('db');
        connection.get_houses()
            .then( (houses)=> res.status(200).send(houses) )
            .catch( ()=> res.status(500).send() );
        console.log


    }
}