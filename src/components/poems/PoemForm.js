import React from 'react'
import { Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const PoemForm = ({ poem, handleChange, handleSubmit }) => (
  <div id="poem-form">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <h1>{poem._id ? 'Update' : 'Enter Poem Information'}</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            name="title"
            value={poem.title}
            type="text"
            placeholder="Title"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Author</Form.Label>
          <Form.Control
            required
            name="author"
            value={poem.author}
            type="text"
            placeholder="Author"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="textarea">
          <Form.Label>Enter Poem Here</Form.Label>
          <Form.Control
            required
            name="body"
            value={poem.body}
            as="textarea" rows="6"
            type="text"
            placeholder="Poem Body"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="year">
          <Form.Label>Year of Release</Form.Label>
          <Form.Control
            required
            name="year"
            value={poem.year}
            type="number"
            placeholder="Year"
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          className="btn btn-danger mr-2"
          variant="danger"
          type="submit"
        >
          {poem._id ? 'Update' : 'Add'}
        </Button>
        <Link to={poem._id ? `/poems/${poem._id}` : '/'} className="btn btn-secondary mr-2">Back</Link>
      </Form>
    </div>
  </div>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         className="form mb-2"
  //         placeholder="Title"
  //         type="text"
  //         value={poem.title}
  //         onChange={handleChange}
  //         name="title"
  //       />
  //       <input
  //         className="form mb-2"
  //         placeholder="Author"
  //         type="text"
  //         value={poem.author}
  //         onChange={handleChange}
  //         name="author"
  //       />
  //       <input
  //         className="form mb-2"
  //         placeholder="Enter your Poem Here"
  //         type="text area"
  //         value={poem.body}
  //         onChange={handleChange}
  //         name="body"
  //       />
  //       <input
  //         className="form mb-2"
  //         placeholder="Year of Release"
  //         type="number"
  //         value={poem.year}
  //         onChange={handleChange}
  //         name="year"
  //       />
  //       <button type="submit" className="btn btn-danger mr-2">{poem._id ? 'Update' : 'Add'}</button>
  //       <Link to={poem._id ? `/poems/${poem._id}` : '/'} className="btn btn-secondary">Back</Link>
  //     </form>
  //   </div>
  // </div>
)

export default PoemForm
