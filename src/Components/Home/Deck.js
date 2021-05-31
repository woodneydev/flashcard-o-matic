import React from "react"
import { Link } from "react-router-dom"

function Deck({ deck, handleDelete }) {

    return (
        <div className="card w-75 mt-2">
            <div className="card-body">
                <div className="d-flex justify-content-between" >
                    <h5 className="card-title">{deck.name}</h5>
                    <p>{deck.cards.length} cards</p>
                </div>
                <p className="card-text">{deck.description}</p>
                <div className="d-flex justify-content-between" >
                    <div>
                        <Link to={`/decks/${deck.id}`} ><button className="btn btn-secondary mr-2">View</button></Link>
                        <Link to={`/decks/${deck.id}/study`}  ><button className="btn btn-primary" >Study</button></Link>
                    </div>
                    <button className="btn btn-danger" onClick={() => handleDelete(deck.id)} >Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Deck