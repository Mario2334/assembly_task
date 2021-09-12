var express = require('express');
var router = express.Router();
const asyncHandler = require('express-async-handler');
const museum_controller = require("../controllers/museum_visitor")
const {validateResult} = require("../middleware/validateResult");
const {query} = require("express-validator");
const moment = require("moment");

router.get('/',
    [
        query("date")
            .custom(value => moment(value,"x").isValid())
            .customSanitizer(value => moment(value,"x").startOf('month').format("YYYY-MM-DDT00:00:00.000")),
         query("ignore")
             .optional()
             .isString()
    ],
    validateResult,
    asyncHandler(museum_controller.getMuseumVisitor))

module.exports = router;
