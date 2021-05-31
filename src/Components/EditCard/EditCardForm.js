import React, { useState } from "react"


function EditCardForm({ card }) {

    const [form, setForm] = useState({ front: card.front, back: card.back })

    const handleFormChange = (event) => {
        setForm({ [event.target.name]: event.target.value })
    }

    return (
        <div>
            <form className="col-8">
                <label htmlFor="front" className="form-label" >Front</label>
                <textarea className="form-control" style={{ height: "100px" }} name="front" id="front" onChange={handleFormChange} value={form.front} required />
                <label htmlFor="description" className="form-label" >Back</label>
                <textarea className="form-control" style={{ height: "100px" }} name="back" id="back" onChange={handleFormChange} value={form.back} required />
                <button className="btn btn-secondary mt-3 mr-3" >Cancel</button>
                <button className="btn btn-primary mt-3" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditCardForm