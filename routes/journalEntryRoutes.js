const router = require('express').Router();
let JounralEntry = require('../models/journalEntry.model');

router.route('/').get((req, res) => {
    JounralEntry.find()
      .then(jounralEntry => res.json(jounralEntry))
      .catch(error => res.status(400).json('Error' + error))
})

router.route('/entryForm').post((req, res) => {
    let date = req.body.date; 
    let notes = req.body.notes;
    let number = Number(req.body.number);

    console.log(date, notes, number)

    const newEntry = new JounralEntry({
        date: date,
        notes: notes,
        number: number
    })

    newEntry.save()
      .then(() => res.json('Entry Added'))
      .catch(error => res.status(400).json('Error' + error))
})

module.exports = router;