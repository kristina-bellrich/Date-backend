const mongoose = require('mongoose')
const appShema = new mongoose.Schema({
    title: String,
    typeOfDating : String
})

module.exports= mongoose.model("Dating", appShema)
