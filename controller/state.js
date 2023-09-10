
const Event = require("../models/event.js");
const Category = require("../models/category.js")
module.exports = {


    createCategory: async function (req, res) {
        try {
            let objCategory = new Category({ name: req.body.Name, description: req.body.Description, image: req.body.Image });
            await objCategory.save();
            res.status(200).json(objCategory._id)
            // res.redirect("/api/v1/category/33207798/list-category");
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.errors['name'].reason});
        }
    }
    ,
    showAllCategory: async function (req, res) {
        try {
            let categoryList = await Category.find();
            res.render("listCategory.html", { records: categoryList });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'showAllCategory Error' });
        }
    }

};