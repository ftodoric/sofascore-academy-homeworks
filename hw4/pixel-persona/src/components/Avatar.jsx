import React from 'react'
import Form from './Form'
import Show from './Show'

class Avatar extends React.Component {
  constructor(props) {
    super(props)

    this.state = { avatars: [] }

    this.saveAvatar = this.saveAvatar.bind(this)
  }

  saveAvatar(avatar) {
    const avatars = [...this.state.avatars]

    avatars.push(avatar)

    this.setState({ avatars })
  }

  render() {
    return (
      <div className="App">
        <div>
          <Form onSubmit={this.saveAvatar} />
          {this.state.avatars.length > 0 ? <Show avatars={this.state.avatars} /> : <h4>No avatars yet!</h4>}
        </div>
      </div>
    )
  }
}

export default Avatar
