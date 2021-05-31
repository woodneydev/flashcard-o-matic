import React from "react"
import { Link, useRouteMatch } from "react-router-dom"
import { deleteCard } from "../../utils/api/index"

function Card({ card, deck }) {
    const { url } = useRouteMatch()

    const handleDelete = (event) => {
        event.preventDefault()
        const doesConfirm = window.confirm("Are you sure you want to delete?");

        if (!doesConfirm) return;

        async function deletefunction() {
            const deleteACard = await deleteCard(card.id);
            window.location.reload()
            return deleteACard
        }

        deletefunction();

    }

    return (
        <div className="card w-75 mt-3">
            <div className="card-body">
                <div className="d-flex justify-content-between" >
                    <div className="mr-2 w-50 ">
                        <p className="card-text">{card.front}</p>
                    </div>
                    <div className="ml-2 w-50 ">
                        <p>{card.back}</p>
                        <div className="d-flex justify-content-end">
                            <Link to={`${url}/cards/${card.id}/edit`} ><button className="btn btn-secondary mr-2">Edit</button></Link>
                            <Link to="#" ><button className="btn btn-danger mr-2" onClick={handleDelete} >Delete</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card