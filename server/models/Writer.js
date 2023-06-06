const { default: mongoose } = require("mongoose");

const WriterSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    country: { type: mongoose.Schema.Types.ObjectId, ref: 'Country' },
    addDate: {type:Date, default:Date.now}
})

const Writer = mongoose.model('Writer', WriterSchema)

module.exports = {
    Writer
}