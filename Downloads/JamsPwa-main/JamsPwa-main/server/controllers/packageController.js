// Importing modules
const
    Package = require('../models/packageModel'),
    factory = require('./handlerFactory'),
    catchAsync = require('../utils/catchAsync'),
    AppError = require('../utils/appError');

// Controllers
exports.createPackage = factory.createOne(Package);
exports.getAllPackages = factory.getAll(Package);
exports.getPackage = factory.getOne(Package);
exports.updatePackage = factory.updateOne(Package);
exports.deletePackage = factory.deleteOne(Package);



exports.getPackagesByService = catchAsync(async (req, res, next) => {
    const packages = await Package.find({ service: req.params.id });
 if(packages.length==0){
    res.json({
        status: 'success',
        results: packages.length,
        data: {
            packages:0
        }
    });
 }else{
    res.json({
        status: 'success',
        results: packages.length,
        data: {
            packages
        }
    });
}
});
