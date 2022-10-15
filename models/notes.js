const mongoose = require('mongoose');

const schema = {
    title: String,
    content: String
};

const options = {
    timestamps: true,
    collection: "notes"
};

const Model = mongoose.model("Note", new mongoose.Schema(schema, options));
module.exports = Model;