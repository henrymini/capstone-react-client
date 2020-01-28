import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'

class PoemCreate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      poem: {
        title: '',
        author: '',
        body: '',
        year: ''
      },
      createdId: ''
    }
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
      url: `${apiUrl}/poems`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: {
        poem: this.state.poem
      }
    })
      .then(res => this.setState({ createdId: res.data.poem._id }))
      .then(() => this.props.alert({
        heading: 'Brilliant!',
        message: 'A marvelous addition!',
        variant: 'succes'
      }))
      .catch(() => this.props.alert({
        heading: 'Something Goofed™',
        message: 'Try again!',
        variant: 'danger'
      }))
  }
  render () {
    if (this.state.created) {
      return <Redirect to={`/poems/${this.state.createdId}`} />
    }
    return (
      'this is a return statement'
    )
  }
}

export default PoemCreate
