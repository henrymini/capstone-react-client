import React from 'react'
import { Link } from 'react-router-dom'

const PoemForm = ({ poem, handleChange, handleSubmit }) => (
  <div>
    <h1>{poem._id ? 'Update' : 'Create a new Poem'}</h1>
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        type="text"
        value={poem.title}
        onChange={handleChange}
        name="title"
      />
      <input
        placeholder="Author"
        type="text"
        value={poem.author}
        onChange={handleChange}
        name="author"
      />
      <input
        placeholder="Enter your Poem Here"
        type="text"
        value={poem.body}
        onChange={handleChange}
        name="body"
      />
      <input
        placeholder="Year of Release"
        type="number"
        value={poem.year}
        onChange={handleChange}
        name="year"
      />
      <button type="submit" className="btn btn-danger">{poem._id ? 'Update' : 'Add'}</button>
      <Link to={poem._id ? `/poems/${poem._id}` : '/'} className="btn btn-warning">Cancel</Link>
    </form>
  </div>
)

export default PoemForm
