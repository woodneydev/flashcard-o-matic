import React, { useEffect, useState } from "react"
import StudyCard from "./StudyCard"
import { useParams } from "react-router-dom"
import BreadCrumbStudy from "./BreadCrumbStudy"
import NotEnoughCards from "./NotEnoughCards"

function Study({ deck }) {
    const { deckId } = useParams()
    const [cards, setCards] = useState(null)

    useEffect(() => {

        const cardsFromApi = deck.cards.filter((card) => {
            return card.deckId === parseInt(deckId)

        })

        setCards(cardsFromApi)

    }, [deck.cards, deckId])

    

    if (cards) {
        return (
            <div>
                {/* I wanted to conditionally render StudyCards and NotEnoughCards, 
                however it would not allow tests to pass so I opted for conditional style rendering instead. */}
                <BreadCrumbStudy deck={deck} />
                <StudyCard cards={cards} deck={deck} />
                <NotEnoughCards cards={cards} deck={deck} />
            </div>
        )
    }

    return <h2>Loading...</h2>
}

export default Study