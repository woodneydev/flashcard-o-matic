import React, { useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { createCard } from "../../utils/api/index"
import CardForm from "../CardForm"

function AddCards() {
    const { deckId } = useParams()
    const [form, setForm] = useState({})
    const history = useHistory()

    const handleFormChange = (event) => {
        setForm({ ...form, deckId, [event.target.name]: event.target.value })

    }

    const handleSubmit = (event) => {
        event.preventDefault()

        async function addnewCard() {
            const result = await createCard(deckId, form)
            window.location.reload()
            return result
        }

        addnewCard()

    }

    const handleDone = (event) => {
        event.preventDefault()
        history.push(`/decks/${deckId}`)
    }

    return (
        <CardForm handleFormChange={handleFormChange} handleSubmit={handleSubmit} primaryBtn={"Save"} secondaryBtn={"Done"} form={form} handleDone={handleDone} />
    )
}

export default AddCards