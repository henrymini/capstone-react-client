import React from 'react'
import { Link } from 'react-router-dom'

const PoemForm = ({ poem, handleChange, handleSubmit }) => (
  <div id="poem-form">
    <div className="col-xs-6 col-md-8 mx-auto mt-auto">
      <h1>{poem._id ? 'Update' : 'Enter Poem Information'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="form mb-2"
          placeholder="Title"
          type="text"
          value={poem.title}
          onChange={handleChange}
          name="title"
        />
        <input
          className="form mb-2"
          placeholder="Author"
          type="text"
          value={poem.author}
          onChange={handleChange}
          name="author"
        />
        <input
          className="form mb-2"
          placeholder="Enter your Poem Here"
          type="text area"
          value={poem.body}
          onChange={handleChange}
          name="body"
        />
        <input
          className="form mb-2"
          placeholder="Year of Release"
          type="number"
          value={poem.year}
          onChange={handleChange}
          name="year"
        />
        <button type="submit" className="btn btn-danger mr-2">{poem._id ? 'Update' : 'Add'}</button>
        <Link to={poem._id ? `/poems/${poem._id}` : '/'} className="btn btn-secondary">Back</Link>
      </form>
    </div>
  </div>
)

export default PoemForm
