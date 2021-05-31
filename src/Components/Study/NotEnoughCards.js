import React from "react"
import { Link } from "react-router-dom"

function NotEnoughCards({ cards, deck }) {

    // conditional sytle rendering, will be displayed if more than 2 cards in the deck
    return (
        <div style={{ display: cards.length < 3 ? "block" : "none" }} >
            <h2>Not Enough Cards</h2>
            <p>You need atleast 3 cards to study. There are {cards.length} cards in this deck.</p>
            <Link to={`/decks/${deck.id}/cards/new`}><button className="btn btn-primary">+ Add Cards</button></Link>
        </div>
    )
}

export default NotEnoughCards