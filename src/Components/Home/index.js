import React, { useEffect, useState } from "react"
import { listDecks } from "../../utils/api/index"
import { Link, useHistory } from "react-router-dom"
import Deck from "./Deck"
import { deleteDeck } from "../../utils/api/index.js"

function Home() {
    const history = useHistory();
    const [decks, setDecks] = useState(null)

    useEffect(() => {
        async function getDeck() {
            const decksFromApi = await listDecks()
            setDecks(decksFromApi)
        }
        getDeck()
    }, [])

    const handleDelete = (id) => {
        const doesConfirm = window.confirm("Are you sure you want to delete?");

        if (!doesConfirm) return;

        async function deletefunction() {
            const deleteADeck = await deleteDeck(id)
            history.push("/")
            window.location.reload()
            return deleteADeck
        }

        deletefunction()


    };


    if (decks) {
        const listOfDecks = decks.map((deck, index) => {
            return (
                <div key={index} >
                    <Deck deck={deck} handleDelete={handleDelete} />
                </div>

            )
        })


        return (
            <div>
                <ul>
                    <Link to="/decks/new"><button className="btn btn-secondary">+ Create Deck</button></Link>
                    {listOfDecks}
                </ul>
            </div>
        )
    }

    return <h2>Loading...</h2>
}


export default Home