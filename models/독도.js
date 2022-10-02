const {Schema, model} = require("mongoose")

const join = new Schema({
    userid: String
})

module.exports = model("독도권한",join)
