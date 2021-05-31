import React from 'react'

function CardContent({ cards, cardNumber, handleNext, handleFlip, isFlipped }) {


    if (isFlipped === false) {
        return (
            <div>
                <p className="card-text">{cards.length > 2 ? cards[cardNumber].front : false}</p>
                <button onClick={handleFlip} className="btn btn-secondary mr-3">Flip</button>
            </div>
        )
    }

    return (
        <div>
            <p className="card-text">{cards[cardNumber].back}</p>
            <button onClick={handleFlip} className="btn btn-secondary mr-3">Flip</button>
            <button onClick={handleNext} className="btn btn-primary">Next</button>
        </div>
    )
}

export default CardContent