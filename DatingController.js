const DatingModel = require("./DatingModel");

module.exports.getDating = async (req, res) =>{
    const myApp = await DatingModel.find();
    res.send(myApp)
}

module.exports.saveDating = async (req, res) =>{
    const {title, typeOfDating} = req.body;
    DatingModel.create({title ,typeOfDating})
    .then((data)=> {console.log(" added")
res.send(data)
})
}


module.exports.deleteDating = async (req, res) =>{
    const {_id} = req.body;
    DatingModel.findByIdAndDelete(_id)
    .then(()=> res.send("deleted"))
}



module.exports.editDating = async (req, res) =>{
    const {_id, title, typeOfDating} = req.body;
    DatingModel.findByIdAndUpdate(_id, {title,typeOfDating})
    .then(()=> res.send("Edited"))
}
