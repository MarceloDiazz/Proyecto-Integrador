const ProductsService = require ("../services/products")


class ProductsController{

    static async allProducts(req, res){
        const { error, data } = await ProductsService.allProducts();

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async categories(req, res){
        const { error, data } = await ProductsService.categories();

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async locations(req, res){
        const { error, data } = await ProductsService.locations();

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async getCategories(req, res) {
        const { error, data } = await ProductsService.getCategories(req.params.category);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

    static async getLocations(req, res) {
        const { error, data } = await ProductsService.getLocations(req.params.location);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }

     static async singleProduct(req, res) {
        const { error, data } = await ProductsService.singleProduct(req.params.id);

        return error ? res.status(data.status || 500).json({ message: data }) : res.json(data);
    }
    
    
}


module.exports= ProductsController