import React, { useState, useEffect } from 'react';
// import axios from 'axios';



const JournalEntry = (props) => {

    return(
        <div className='journal-items'>
            <div><b>Date:</b> {props.date}</div>
            <div><b>Notes:</b> {props.notes}</div>
            <div><b>Mood on a scale from 1-10: </b> {props.number}</div>        
        </div>
    )
}


export default function JounralContainer() {
    const [data, setData] = useState([]);


    useEffect(() =>  {

        const getDatabaseData = async() => {
            try {
                const response = await fetch('http://localhost:3001/')
                const fetchData = await response.json()
                setData(fetchData)
            } catch(error) {
                console.log('Error', error)
            }
        }

        getDatabaseData();
    },[])

    return (
        <div>

            <h1>Journal Entries</h1>
            <div className='journal-container'>
                {data.map((entry) => {
                    return (
                        <JournalEntry
                            key={entry._id} 
                            date={entry.date}
                            notes={entry.notes}
                            number={entry.number} />
                    );    
                })}
            </div>
        </div>
    );
};


;