var soda = require('soda-js');

exports.getVisitors = (params) => {
    var consumer = new soda.Consumer("data.lacity.org")
    return new Promise(
        (resolve, reject) => {
            consumer.query()
                .withDataset('trxm-jn3c')
                .where(params)
                .getRows()
                .on('success', function(rows) {resolve(rows); })
                .on('error',
                    function(error) {
                    reject(error);
                })
        }
    )

}
