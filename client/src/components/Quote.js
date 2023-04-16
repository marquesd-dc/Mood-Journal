import React, { useEffect, useState } from 'react';

export default function Quote() {

    const [quote, setQuote] = useState([]);

    useEffect(() =>  {
        const url = 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7003d88ca4msh83c5c0c44945c5ep10eda5jsnf5fbe5186f9b',
                'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
            }
        }

        const fetchQuote = async() => {
            try {
                const response = await fetch(url, options)
                const quoteJson = await response.json()
                setQuote(quoteJson)
            } catch(error) {
                console.log('Error', error)
            }
        }

        fetchQuote();
    },[])

    return (
        <div>
            <h4>Today's Quote</h4>
            <br/>
            <blockquote>"{quote.text}"</blockquote>
            {/* <p className='quoteOfTheDay'> - {quote.author}</p> */}
        </div>
    )
}