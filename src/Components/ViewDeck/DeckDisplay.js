import React from "react"
import { Link, useHistory, useRouteMatch } from "react-router-dom"
import { deleteDeck } from "../../utils/api/index"

function DeckDisplay({ deck }) {
    const history = useHistory()
    const { url } = useRouteMatch()

    const handleDelete = (event) => {
        event.preventDefault()
        const doesConfirm = window.confirm("Are you sure you want to delete?");

        if (!doesConfirm) return;

        async function deletefunction() {
            const deleteADeck = await deleteDeck(deck.id)
            history.push("/");
            window.location.reload()
            return deleteADeck
        }

        deletefunction();


    }


    return (
        <div className="card w-75 mb-5">
            <div className="card-body">
                <div className="d-flex justify-content-between" >
                    <h5 className="card-title">{deck.name}</h5>
                </div>
                <p className="card-text">{deck.description}</p>
                <div className="d-flex justify-content-between" >
                    <div>
                        <Link to={`${url}/edit`} ><button className="btn btn-secondary mr-2">Edit</button></Link>
                        <Link to={`${url}/study`} ><button className="btn btn-primary mr-2" >Study</button></Link>
                        <Link to={`${url}/cards/new`} ><button className="btn btn-primary" >+ Add Cards</button></Link>
                    </div>
                    <button className="btn btn-danger" onClick={handleDelete} >Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeckDisplay