var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var RoomSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: [true, "cannot be empty."], lowercase: true, index: true},
}, {timestamps: true});

RoomSchema.plugin(uniqueValidator, {message: "is already taken."});

RoomSchema.methods.toJSON = function(){
    return {
        name: this.username,
    };
};

module.exports = mongoose.model('Room', RoomSchema);