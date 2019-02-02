let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

//create refrence to the contact model
let contact = require('../models/contacts');
// Get contac list page - Read
router.get('/', (req, res, next)=> {
    contact.find(err, contactList)
    console,log(contactList)
    if(err)
    {
        return console.error(err);
    }
    else{
        res.render('contacts/index',{
            title: 'COntact List',
        contactList: contactList
         });
    }

//create modal class
let contactSchema = mongoose.Schema(
{
firstName: String,
lastName: String,
age: Number
},
{
    collection:"first"
});

module.exports = mongoose.model('demo', contactSchema);     // Name of model and schema