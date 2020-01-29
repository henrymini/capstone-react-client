import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link, Redirect } from 'react-router-dom'

class Poem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      poem: null,
      deleted: false
    }
  }
  componentDidMount () {
    const { user } = this.props
    axios({
      url: `${apiUrl}/poems/${this.props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => {
        this.setState({ poem: res.data.poem })
      })
      .catch(console.error)
  }
  handleDelete = () => {
    axios({
      url: `${apiUrl}/poems/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(() => this.props.alert({
        heading: 'We can forget about that',
        message: `${this.state.poem.title} has been deleted`,
        variant: 'success'
      }))
      .then(this.setState({ deleted: true }))
      .catch(() => this.props.alert({
        heading: 'Something Goofed™',
        message: 'The poem was not deleted',
        variant: 'danger'
      }))
  }
  render () {
    if (this.state.deleted) {
      return <Redirect to={
        {
          // route to authenticated home page (a.k.a. all the poems)
          pathname: '/',
          state: { deleted: this.state.poem._id }
        }
      } />
    }
    if (!this.state.poem) {
      return <p>loading...loading...loading...loading...</p>
    }
    return (
      <div id="poem-display">
        <h2>{this.state.poem.title}</h2>
        <h4>{this.state.poem.author}</h4>
        <hr/>
        <p>{this.state.poem.body}</p>
        {this.state.poem.year && <p>Released {this.state.poem.year}</p>}
        <div className="poem-buttons">
          <React.Fragment>
            <Link className="btn btn-danger mr-2" to={`/poems/${this.props.match.params.id}/edit`}>Edit</Link>
            <button className="btn btn-warning mr-2" onClick={this.handleDelete}>Delete</button>
          </React.Fragment>
          <Link className="btn btn-secondary" to="/">Back</Link>
        </div>
      </div>
    )
  }
}

export default Poem
