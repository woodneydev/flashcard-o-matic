import React, { useState } from "react"
import CardForm from "../CardForm"
import {updateCard} from "../../utils/api/index"
import { useHistory, useParams } from "react-router-dom"


function EditCardForm({ card }) {
    const {deckId} = useParams()
    console.log(deckId)
    const history = useHistory()
    const [form, setForm] = useState({ front: card.front, back: card.back, id: card.id, deckId: card.deckId })

    const handleFormChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        async function editCard() {
            const result = await updateCard(form)
            history.push(`/decks/${deckId}`)
            window.location.reload()
            return result
        }

        editCard()

    }

    const handleDone = (event) => {
        event.preventDefault()
        history.push(`/decks/${deckId}`)
    }

    return (
        < CardForm handleFormChange={handleFormChange} handleSubmit={handleSubmit} handleDone={handleDone} secondaryBtn={"Cancel"} primaryBtn={"Submit"} form={form} />
    )
}

export default EditCardForm