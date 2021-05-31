import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { createDeck } from "../../utils/api/index"

function CreateDeck() {

    const history = useHistory()
    const [form, setForm] = useState({})

    const handleFormChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        async function newDeck() {
            const result = await createDeck(form)
            history.push("/")
            window.location.reload()
            return result
        }

        newDeck()

    }

    return (
        <form className="col-8" onSubmit={handleSubmit} >
            <label htmlFor="name" className="form-label" >Name</label>
            <input className="form-control mb-2" type="text" id="name" name="name" onChange={handleFormChange} value={form.name} placeholder="Deck Name" required />
            <label htmlFor="description" className="form-label" >Description</label>
            <textarea className="form-control" style={{ height: "100px" }} name="description" id="description" onChange={handleFormChange} value={form.description} placeholder="Brief description of the deck" required />
            <button className="btn btn-secondary mt-3 mr-3" >Cancel</button>
            <button className="btn btn-primary mt-3" type="submit">Submit</button>
        </form>
    )
}

export default CreateDeck