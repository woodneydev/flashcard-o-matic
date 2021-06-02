import React from "react"

function CardForm({ handleFormChange, handleSubmit, handleDone, primaryBtn, secondaryBtn, form }) {

    return (
        <form className="col-8" onSubmit={handleSubmit} >
            <label htmlFor="front" className="form-label" >Front</label>
            <textarea className="form-control" style={{ height: "100px" }} name="front" id="front" onChange={handleFormChange} value={form.front} placeholder="Front side of card" required />
            <label htmlFor="description" className="form-label" >Back</label>
            <textarea className="form-control" style={{ height: "100px" }} name="back" id="back" onChange={handleFormChange} value={form.back} placeholder="Back side of card" required />
            <button className="btn btn-secondary mt-3 mr-3" onClick={handleDone} >{secondaryBtn}</button>
            <button className="btn btn-primary mt-3" type="submit">{primaryBtn}</button>
        </form>
    )
}

export default CardForm