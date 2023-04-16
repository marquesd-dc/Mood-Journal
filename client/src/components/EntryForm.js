import React, { useState } from 'react';
import axios from 'axios';

export default function EntryForm() {

        const [date, setDate] = useState('');
        const [notes, setNotes] = useState('');
        const [number, setNumber] = useState(0);

        const submitEntry = (e) => { 
            e.preventDefault();
            const entry = {
                date: date,
                notes: notes,
                number: number,            
            };
    
            axios.post('http://localhost:3001/entryForm', entry)
                .then(res => console.log(res.data))

        };

        return (
            <div className='container'>
            <h4>New Jounral Entry</h4>
            <br/>
            <form className='entry-form' onSubmit={submitEntry} method='post' action='/'>
                <label className='entry-grid-item-text'>Date: </label>
                <input className='entry-grid-item' type='date' name='date' onChange={(e) => setDate(e.target.value)}></input>
                <label className='entry-grid-item-text'>Notes: </label>
                <textarea className='entry-grid-item' name='notes' onChange={(e) => setNotes(e.target.value)}></textarea>
                <label className='entry-grid-item-text'>How did you feel on a scale of 1-10?: </label>
                <input className='entry-grid-item' type="number" name='number' min="1" max="10" onChange={(e) => setNumber(e.target.value)}></input>
                <button id='btn-entry' className='btn btn-primary' style={{gridColumn: 'span 2'}}>Create new journal entry</button>
            </form>
        </div>
    )
}