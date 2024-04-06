const mongoose = require("mongoose");

const User = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    password: {
      type: String,
      required: true,
      private: true,  
    },
    lastName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    streak :{
        type: Number,
        default: 0,
    },
    exp: {
        type: Number,
        default: 0,
    },
    league:{
        type: String,
        default: ""
    },
    friends: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
    ],

});

const UserModel = mongoose.model("User", User);
module.exports = UserModel;