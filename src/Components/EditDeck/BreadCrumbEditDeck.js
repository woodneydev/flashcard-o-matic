import React from "react"
import { Link } from "react-router-dom"

function BreadCrumbEditDeck({ deck }) {

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Edit</li>
            </ol>
        </nav>
    )
}

export default BreadCrumbEditDeck