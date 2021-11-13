// Importing modules
const
    Category = require('../models/categoryModel'),
    factory = require('./handlerFactory'),
    catchAsync = require('../utils/catchAsync');

// Controllers
exports.createCategory = factory.createOne(Category);
exports.getAllCategories = factory.getAll(Category);
exports.getCategory = factory.getOne(Category);
exports.updateCategory = factory.updateOne(Category);
exports.deleteCategory = factory.deleteOne(Category);


//jio app fuction 
exports.getjioCategory = catchAsync(async (req, res, next) => {
   // const data = ( await Category.find( )).filter(cur => cur.category.onlyjio);
    const categories =  await Category.find({onlyjio : true})

    res.json({
        status: 'success',
        results: categories.length,
        data: {
           categories 
        }
    });
    console.log(categories); 
});

