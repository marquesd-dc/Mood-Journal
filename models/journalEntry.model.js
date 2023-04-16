const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journalEntrySchema = new Schema ({
    date: { type: String} ,
    notes: { type: String},
    number: { type: Number}
});

const JournalEntry = mongoose.model('JournalEntry', journalEntrySchema);
module.exports = JournalEntry;
