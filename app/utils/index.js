const moment = require("moment");

exports.serializeDataset = (data, ignored_column = "") => {

    // Function serializes and parses dataset according to Requirement

    let highest = {
        "museum": "test",
        "visitors": -1
    };
    let lowest = {
        "museum": "test",
        "visitors": Number.MAX_SAFE_INTEGER
    }
    let sum = 0;
    let date = moment(data.month,"YYYY-MM-DDTHH:mm:ss.SSS");
    let ignored_museum = null;
    for (let ms_key of Object.keys(data)){
        let visitors = parseInt(data[ms_key]);
        if (ms_key !== "month" && ms_key !== ignored_column) {
            if (visitors > highest.visitors) {
                highest = {
                    museum: ms_key,
                    visitors: visitors
                }
            }
            if (data[ms_key] < lowest.visitors) {
                lowest = {
                    museum: ms_key,
                    visitors: visitors
                }
            }
            sum += visitors
        }
        else if (ms_key === ignored_column && ms_key !== ""){
            ignored_column = {
                museum: ms_key,
                visitors: visitors
            }
        }
    }
    let dataset = {
        "attendance": {
            "month": date.format('MMMM'),
            "year": date.year(),
            "highest":highest,
            "lowest": lowest,
            "total": sum
        }
    }
    if (ignored_museum) {
        dataset["ignored"] = ignored_museum;
    }
    return dataset
}
