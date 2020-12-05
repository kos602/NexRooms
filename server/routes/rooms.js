var express = require('express');
var router = express.Router();

const Room = require('../models/Room');

router.get('/:id', function(req, res, next) {
    Room.findById(req.params.id).then(function(room){
        if(!room){return res.sendStatus(401);}
        return res.json({room});
    }).catch(next);
});

router.post('/new', function(req,res,next){
    var room = new Room();
    room.name = req.body.room.name;
    
    room.save().then(function(){
        return res.json({room});
    }).catch(next);
});

module.exports = router;