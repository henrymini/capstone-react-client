import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'
import PoemForm from './PoemForm'

class PoemEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      poem: {
        title: '',
        author: '',
        body: '',
        year: ''
      },
      updated: false
    }
  }
  componentDidMount () {
    axios({
      url: `${apiUrl}/poems/${this.props.match.params.id}/edit`,
      method: 'GET'
    })
      .then(res => {
        // console.log('we\'re in here')
        const poem = {
          ...res.data.poem,
          year: res.data.poem.year.substring(0, 10)
        }
        this.setState({ poem })
      })
      .catch(console.error)
  }
    handleChange = event => {
      this.setState({
        poem: {
          ...this.state.poem,
          [event.target.name]: event.target.value
        }
      })
    }
    handleSubmit = event => {
      event.preventDefault()
      axios({
        url: `${apiUrl}/poems/${this.props.match.params.id}`,
        method: 'PATCH',
        headers: {
          'Authorization': `Token token=${this.props.user.token}`
        },
        data: {
          poem: this.state.poem
        }
      })
        .then(res => this.setState({ updated: true }))
        .then(() => this.props.alert({
          heading: 'Nothing is ever finished',
          message: 'You updated a poem.',
          variant: 'success'
        }))
        .catch(() => this.props.alert({
          heading: 'Something Goofed™',
          message: 'The poem was not updated.',
          variant: 'danger'
        }))
    }
    render () {
      if (this.state.updated) {
        return <Redirect to={`/poems/${this.props.match.params.id}`} />
      }
      return (
        <PoemForm
          poem={this.state.poem}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      )
    }
}

export default PoemEdit
