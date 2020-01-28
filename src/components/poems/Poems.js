import React, { Component } from 'react'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup'

class Poems extends Component {
  constructor (props) {
    super(props)
    this.state = {
      poems: []
    }
  }
  componentDidMount () {
    this.getPoems()
  }
  getPoems = () => {
    const { user } = this.props
    axios({
      url: 'http://localhost:4741/poems',
      method: 'GET',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(response => {
        // this reverses the array of poems to show the most recent first
        this.setState({ poems: response.data.poems.reverse() })
      })
      .catch(console.error)
  }
  render () {
    let poemsJsx = ''
    if (!this.state.poems.length) {
      poemsJsx = <p>loading...loading...loading...loading...</p>
    } else {
      poemsJsx = this.state.poems.map(poem => (
        // ListGroup is a react-bootstrap component
        <ListGroup.Item
          key={poem._id}
          action
          href={`#/poems/${poem._id}`}
          // this flexbox is for organizing the content rendered
          className="d-flex justify-content-between"
        >
          <span>{poem.title}</span>
          <span>{poem.author}</span>
        </ListGroup.Item>
      ))
    }
    return (
      <div>
        <h2>Poems</h2>
        <ListGroup>
          {poemsJsx}
        </ListGroup>
      </div>
    )
  }
}

export default Poems
