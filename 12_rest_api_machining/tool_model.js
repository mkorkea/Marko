const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        Tool_name:{
            type: String,
            required: true
        },
        Material: {
            type: String,
            required: true
        },
        Cutting_speed:{
            type: String,
            required: true
        },
        Feed_rate: {
            type: String,
            required: true
        }

    }
);

module.exports = mongoose.model("tool", schema);