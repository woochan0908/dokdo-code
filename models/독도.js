const {Schema, model} = require("mongoose")

const join = new Schema({
    userid: String
})

module.exports = model("λλκΆν",join)
