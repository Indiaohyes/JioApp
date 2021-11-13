const
    router = require('express').Router(),
    packageController = require('../controllers/packageController');

router
    .route('/')
    .get(packageController.getAllPackages)
    .post(packageController.createPackage);

router
    .route('/:id')
    .get(packageController.getPackage)
    .patch(packageController.updatePackage)
    .delete(packageController.deletePackage);

    router.get('/service/:id', packageController.getPackagesByService);

module.exports = router;