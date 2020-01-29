import { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'

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
    return (
      'sremm lyfe'
    )
  }
}

export default Poem
