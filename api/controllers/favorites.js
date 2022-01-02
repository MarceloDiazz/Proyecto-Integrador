const Favorites= require ("../models/Favorites")

class FavoriteController {
    static favorites(req,res,next){
        Favorites.findOne({ where: {userId: req.params.userId } })
        .then((data)=> res.send(data))
        .catch((error)=> console.log(error))
    }
    
    static addFavorites(req,res,next){
        Favorites.create(req.body)
        .then((favorite)=> res.status(201).send(favorite))
        .catch((error)=> console.log(error))
    }

}


module.exports= FavoriteController