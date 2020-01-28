import { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class Poem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      poem: null
    }
  }
  componentDidMount () {
    axios({
      url: `${apiUrl}/poems/${this.props.match.params.id}`,
      method: 'GET'
    })
      .then(res => {
        this.setState({ poem: res.data.poem })
      })
      .catch(console.error)
  }
  render () {
    return (
      'sremm lyfe'
    )
  }
}

export default Poem
