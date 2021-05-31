import React, { useState } from "react"
import CardContent from "./CardContent"
import { useHistory } from "react-router-dom"

function StudyCard({ cards, deck, children }) {
    const history = useHistory()
    const maxCount = parseInt(cards.length)
    const [cardNumber, setCardNumber] = useState(0)
    const [isFlipped, setIsFlipped] = useState(false)

    const handleFlip = () => {
        setIsFlipped(currentValue => !currentValue)
    }

    const handleNext = () => {

        if (cardNumber + 1 === maxCount) {
            const isConfirmed = window.confirm("Restart the deck?")
            if (!isConfirmed) history.push("/")
            if (isConfirmed) {
                setCardNumber(0)
                setIsFlipped(false)
            }
            return
        }

        setCardNumber(cardNumber + 1)
        setIsFlipped(currentValue => !currentValue)

    }

    // conditional sytle rendering to hide card study mode and opt for NotEnoughCards component instead.
    return (
        <div>
            <h1>Study: {deck.name}</h1>
            <div className="card w-75 mt-4" style={{ display: cards.length > 2 ? "block" : "none" }} >
                <div className="card-body">
                    <h5 className="card-title">Card {cardNumber + 1} of {maxCount} </h5>
                    <CardContent handleFlip={handleFlip} handleNext={handleNext} isFlipped={isFlipped} cards={cards} cardNumber={cardNumber} />
                </div>
            </div>
            {cards.length < 3 && children}
        </div>
    )
}

export default StudyCard