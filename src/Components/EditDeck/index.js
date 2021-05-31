import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { updateDeck } from "../../utils/api/index"

function EditDeck({ deck }) {
    const history = useHistory()
    const [form, setForm] = useState({ id: deck.id, name: deck.name, description: deck.description })

    const handleFormChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        async function putDeck() {
            const result = await updateDeck(form)
            history.push(`/decks/${deck.id}`)
            window.location.reload()
            return result
        }
        putDeck()
    }

    const handleCancel = (event) => {
        event.preventDefault()
        history.goBack()
    }

    return (
        <form className="col-8" onSubmit={handleSubmit} >
            <label htmlFor="name" className="form-label" >Name</label>
            <input className="form-control mb-2" type="text" id="name" name="name" onChange={handleFormChange} value={form.name} required />
            <label htmlFor="description" className="form-label" >Description</label>
            <textarea className="form-control" style={{ height: "100px" }} name="description" id="description" onChange={handleFormChange} value={form.description} required />
            <button className="btn btn-secondary mt-3 mr-3" onClick={handleCancel} >Cancel</button>
            <button className="btn btn-primary mt-3" type="submit">Submit</button>
        </form>
    )
}

export default EditDeck