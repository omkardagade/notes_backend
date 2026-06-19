// CHATGPT
// MONGODB PASS ckjOgK5FtXdnCvaV
// mongodb+srv://omkardagade10_db_user:ckjOgK5FtXdnCvaV@cluster0.r1c6hj3.mongodb.net/?appName=Cluster0
// Data to store in the memory
/*const notes = [
  {
    id: 1,
    title: "Learn Backend",
  },
  {
    id: 2,
    title: "Learn MongoDB",
  },
];
*/

//connection to .env
require("dotenv").config();

//connection to mongoose

const connectDB = require("./config/db.js");
connectDB();

//conection to controllers
/*const {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} = require("./controllers/noteControllers.js"); */

//Connection to Routes
const noteRoutes = require("./routes/noteRoutes.js");

// SERVER
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

//old way to connect mongoose
/* mongoose.connect(
    "mongodb+srv://omkardagade10_db_user:ckjOgK5FtXdnCvaV@cluster0.r1c6hj3.mongodb.net/?appName=Cluster0",
  )
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  }); * /

// Lets make a SCHEMA , A schema Think of it as a blueprint. The schema tells MongoDB what a Note should look like.
/*const noteSchema = new mongoose.Schema({
  title: String,
});*/

// Lets create a MODEL , A Model is Machine that creates, reads,updates and deletes documents
//const Note = mongoose.model("Note", noteSchema);
// AFte the above line of code I can do Note.find() Note.create() Note.deleteOne() Note.findById()

// NEW way to add note, basically importing it from the note file
const Note = require("./models/Note.js");

// My First Route
app.get("/", (req, res) => {
  res.send("Hello Omkar! Your backend is running.");
});

// GET Route without connection to controllers
/* app.get("/notes", async (req, res) => {
  const notes = await Note.find();

  res.send(notes);
}); */

/*
// GET Route with connection to controllers
app.get("/notes", getNotes);

// Post Route
app.post("/notes", async (req, res) => {
  const note = await Note.create({
    title: req.body.title,
  });

  res.send(note);
});

// Get note with ID, basically get a single note

app.get("/notes/:id", async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) {
    return res.status(404).send("Note not found");
  }

  res.send(note);
});

// Delete note with id

app.delete("/notes/:id", async (req, res) => {
  const deletedNote = await Note.findByIdAndDelete(req.params.id);

  if (!deletedNote) {
    return res.status(404).send("Note not found");
  }

  res.send("Note deleted");
});

// To UPDATE a note

app.put("/notes/:id", async (req, res) => {
  const updatedNote = await Note.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
    },
    {
      new: true,
    },
  );

  if (!updatedNote) {
    return res.status(404).send("Note not found");
  }

  res.send(updatedNote);
});
*/

// First DB TEST
/* app.get("/test-db", async (req, res) => {
  const note = await Note.create({
    title: "My first MongoDB note",
  });

  res.send(note);
}); */

/* All the Routes using noteControllers
app.get("/notes", getNotes);

app.get("/notes/:id", getNote);

app.post("/notes", createNote);

app.put("/notes/:id", updateNote);

app.delete("/notes/:id", deleteNote); */

//NEw way to get to the routes basically from there own file
app.use("/notes", noteRoutes);

// This START'S the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
