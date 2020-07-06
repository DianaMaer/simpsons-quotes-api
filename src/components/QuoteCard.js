import React from 'react';

const QuoteCard = ({ character, image, quote }) => {
    return(
        <div>
            <p>{character}</p>
            <img src={image} alt={character} />
            <p>"{quote}"</p>
        </div>
        
    )
}


export default QuoteCard