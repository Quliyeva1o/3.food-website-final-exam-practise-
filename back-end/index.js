
const express = require('express');
const { Schema, default: mongoose } = require('mongoose');
const app = express()
const port = 3000
var bodyParser = require('body-parser')
app.use(bodyParser.json())
const cors = require('cors');
app.use(cors());

const schema = new Schema({
    name: String,
    desc: String,
    img: String,
    price: Number,
});

const Model = mongoose.model('Test', schema);

app.get('/', async (req, res) => {
    const found = await Model.find()
    try { res.send(found) }
    catch { res.send("cannt get") }
})
app.get('/:id', async (req, res) => {
    const { id } = req.params
    const found = await Model.findById(id)
    try { res.send(found) }
    catch { res.send("cannt get") }
})
app.post('/', async (req, res) => {
    const newItem = new Model(req.body)
    newItem.save()
    try { res.send(newItem) }
    catch { res.send("cannt get") }
})
app.delete('/:id', async (req, res) => {
    const { id } = req.params
    const delit = await Model.findByIdAndDelete(id)
    try { res.send(delit) }
    catch { res.send("cannt del") }
})



mongoose.connect("mongodb+srv://Rena:Rena123@practise3.8el2ruv.mongodb.net/").then(() => {
    console.log("connected");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})