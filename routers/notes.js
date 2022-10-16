const router = require('express').Router();

const {
    createNote,
    updateNote,
    deleteNote,
    getAllNote,
    getOneNote
} = require("../controllers/notes");

router.get('/notes/', getAllNote);
router.get('/notes/:id', getOneNote);
router.post('/notes/', createNote);
router.put('/notes/:id', updateNote);
router.delete('/notes/:id', deleteNote);

module.exports = router;
