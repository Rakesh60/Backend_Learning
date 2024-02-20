const model = require("../model/Notes");
const Notes = model.Note;

exports.createNotes = async (req, res) => {
  const note = new Notes(req.body);
  try {
    const savedNote = await note.save();
    console.log(savedNote);
    res.status(201).json(savedNote);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
};

exports.getNotes = async (req, res) => {
  const notes = await Notes.find();
  res.json(notes)
};
