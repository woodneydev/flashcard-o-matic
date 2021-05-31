import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BreadCrumbEditCards from "./BreadCrumbEditCards"
import { readCard } from "../../utils/api/index"
import EditCardForm from "./EditCardForm"

function EditCard({ deck }) {
    const [card, setCard] = useState(null)
    const { cardId } = useParams()


    useEffect(() => {
        async function loadCard() {
            const cardFromApi = await readCard(cardId)
            setCard(cardFromApi)
        }
        loadCard()
    }, [cardId])

    if (card) {
        return (
            <div>
                <BreadCrumbEditCards deck={deck} cardId={cardId} />
                <EditCardForm card={card} />
            </div>
        )
    }

    return <h2>Loading</h2>
}

export default EditCard