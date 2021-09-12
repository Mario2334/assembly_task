const logger = require("../utils/logger");
const search_api = require("../search_api/getVisitors");
const {serializeDataset} = require("../utils");

exports.getMuseumVisitor = async (req, res) =>{
    // Controller to implement get Date

    let date = req.query.date;
    let ignored_columns = req.query.ignore ? req.query.ignore : "";

    logger.info(date);

    try{
        let dataset = await search_api.getVisitors({month: date});
        dataset = serializeDataset(dataset[0],ignored_columns);
        res.send(dataset)

    } catch (e) {
        logger.error(e)
        res.status(500).send({
            message: 'failure',
            status: 422,
            errors: e
        });
    }

}
