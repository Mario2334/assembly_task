const {validationResult} = require("express-validator");

module.exports.validateResult = (req , res, next) =>{
    const errors = validationResult(req);
    errors.isEmpty()? next():res.status(422).json({
        message: 'failure',
        status: 422,
        errors: errors.array()
    });
}
