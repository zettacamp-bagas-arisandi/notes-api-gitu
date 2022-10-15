const NotesModel = require("../models/notes");

async function createNote(req, res) {
    try {
        const body = req.body;
        const note = await NotesModel.create(body);

        res.status(200).send({
            success: true,
            data: note
        });
    }
    
    catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
}

async function updateNote(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;
        const note = await NotesModel.findByIdAndUpdate(id, body, { new: true });
        
        res.status(200).send({
            success: true,
            data: note
        });
    }

    catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
}

async function getAllNote(req, res) {
    try {
        const notes = await NotesModel.find({});
        
        res.status(200).send({
            success: true,
            data: notes
        });
    }

    catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
}

async function getOneNote(req, res) {
    try {
        const id = req.params.id;
        const note = await NotesModel.findById(id);
        
        res.status(200).send({
            success: true,
            data: note
        });
    }

    catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
}

async function deleteNote(req, res) {
    try {
        const id = req.params.id;
        await NotesModel.findByIdAndDelete(id);
        
        res.status(200).send({
            success: true,
            data: null
        });
    }

    catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    createNote,
    updateNote,
    deleteNote,
    getAllNote,
    getOneNote
};
