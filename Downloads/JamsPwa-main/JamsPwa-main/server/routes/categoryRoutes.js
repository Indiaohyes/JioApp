const
    router = require('express').Router(),
    categoryController = require('../controllers/categoryController');

router
    .route('/')
    .get(categoryController.getAllCategories)
    .post(categoryController.createCategory);

 router.get('/getjioCateygory',categoryController.getjioCategory)
    
router
    .route('/:id')
    .get(categoryController.getCategory)
    .patch(categoryController.updateCategory)
    .delete(categoryController.deleteCategory);

module.exports = router;