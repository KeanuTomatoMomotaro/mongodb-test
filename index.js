const express = require('express')
const mongoose = require('mongoose')

const app = express()

// const Schema = mongoose.Schema, ObjectId = Schema.ObjectId

// const Girlfriend = new Schema ({
//     soc_number: ObjectId,
//     name: String,
//     phone_number: String,
//     first_date: Date
// })

mongoose.connect('mongodb://localhost/test')

const Keanus = mongoose.model('Keanu', mongoose.Schema({
    item: String,
    nama: String,
    nohp: String
    }), "Keanu")

app.get('/', (req, res) => {
    Keanus.find({}, function (err, Keanus){
        if(err) throw err

        // console.log(Keanus,'XXXXXXXXX')
        res.json(Keanus)
    })
})

app.get('/add', (req, res) => {
    Keanus.create({_id: "5ab0c0d780f9a82dc0a69e3a", item:"Pacar3", nohp:"1234"}, function (err, Keanus){
        if(err) throw err
        res.json(Keanus)
    })
})

app.listen(3000, () => {
    console.log("Application is Listening on 3000")
})