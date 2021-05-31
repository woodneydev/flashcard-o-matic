import React from "react"
import CreateDeck from "./CreateDeck"
import { Link } from "react-router-dom"


function NewDeck() {


    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
                </ol>
            </nav>
            <h1>Create Deck</h1>
            <CreateDeck />
        </div>

    )
}

export default NewDeck