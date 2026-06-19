const Note = require("../models/Note");

const getNotes = async (req, res) => {
    const notes = await Note.find();
    res.send(notes);
};

const getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);

    if (!note) {
        return res.status(404).send("Note not found");
    }

    res.send(note);
};

const createNote = async (req, res) => {
    const note = await Note.create({
        title: req.body.title
    });

    res.send(note);
};

const updateNote = async (req, res) => {
    const updatedNote = await Note.findByIdAndUpdate(
        req.params.id,
        { title: req.body.title },
        { new: true }
    );

    if (!updatedNote) {
        return res.status(404).send("Note not found");
    }

    res.send(updatedNote);
};

const deleteNote = async (req, res) => {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
        return res.status(404).send("Note not found");
    }

    res.send("Note deleted");
};

module.exports = {
    getNotes,
    getNote,
    createNote,
    updateNote,
    deleteNote
};