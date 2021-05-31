import React, { useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { createCard } from "../../utils/api/index"

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
        <form className="col-8" onSubmit={handleSubmit} >
            <label htmlFor="front" className="form-label" >Front</label>
            <textarea className="form-control" style={{ height: "100px" }} name="front" id="front" onChange={handleFormChange} value={form.front} placeholder="Front side of card" required />
            <label htmlFor="description" className="form-label" >Back</label>
            <textarea className="form-control" style={{ height: "100px" }} name="back" id="back" onChange={handleFormChange} value={form.back} placeholder="Back side of card" required />
            <button className="btn btn-secondary mt-3 mr-3" onClick={handleDone} >Done</button>
            <button className="btn btn-primary mt-3" type="submit">Save</button>
        </form>
    )
}

export default AddCards