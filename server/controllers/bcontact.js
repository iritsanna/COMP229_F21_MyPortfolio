let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Bcontact = require('../models/bcontact');

module.exports.displayBcontactList = (req, res, next) => {
    Bcontact.find((err, bcontactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('bcontact/list', 
            {title: 'Business Contacts', 
            BcontactList: bcontactList, 
                        displayName: req.user ? req.user.displayName : ''});      
        }
    }).sort({"name":1});
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('bcontact/add', {title: 'Add Business Contact', 
    displayName: req.user ? req.user.displayName : ''})          
}

module.exports.processAddPage = (req, res, next) => {
    let newBcontact = Bcontact({
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email
    });

    Bcontact.create(newBcontact, (err, Bcontact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the bcontact list
            res.redirect('/bcontact-list');
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Bcontact.findById(id, (err, bcontactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('bcontact/edit', {title: 'Edit Business Contact', bcontact: bcontactToEdit, 
            displayName: req.user ? req.user.displayName : ''})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedBcontact = Bcontact({
        "_id": id,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email
    });

    Bcontact.updateOne({_id: id}, updatedBcontact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
       else 
        {
            // refresh the bcontact list
            res.redirect('/bcontact-list');
        }
    });

}

module.exports.performDirectDelete = (req, res, next) => {
    let id = req.params.id;

    Bcontact.remove({_id: new ObjectId(id)}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the bcontact list
             res.redirect('/bcontact-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Bcontact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the bcontact list
             res.redirect('/bcontact-list');
        }
    });
}